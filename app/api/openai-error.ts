type OpenAIErrorBody = {
  error?: {
    code?: string | null;
    message?: string | null;
    type?: string | null;
  };
};

export async function openAIErrorResponse(response: Response, feature: "text" | "image") {
  let body: OpenAIErrorBody = {};
  try {
    body = (await response.json()) as OpenAIErrorBody;
  } catch {
    // OpenAI can occasionally return an empty or non-JSON upstream response.
  }

  const code = body.error?.code ?? "unknown";
  const type = body.error?.type ?? "unknown";
  const providerMessage = body.error?.message ?? "No provider message returned.";
  console.error("OpenAI request failed", {
    feature,
    status: response.status,
    code,
    type,
    message: providerMessage.slice(0, 500),
  });

  if (response.status === 401 || response.status === 403) {
    return {
      status: 502,
      error: "OpenAI rejected the configured API key or this model is not enabled for the project.",
    };
  }
  if (response.status === 404) {
    return {
      status: 502,
      error: "The configured OpenAI model is unavailable for this API project.",
    };
  }
  if (response.status === 429 && code === "insufficient_quota") {
    return {
      status: 429,
      error: "The OpenAI project has no available API quota. Add billing or increase its usage limit, then try again.",
    };
  }
  if (response.status === 429) {
    return {
      status: 429,
      error: "OpenAI is rate-limiting this workspace. Please try again shortly.",
    };
  }
  if (response.status === 400) {
    return {
      status: 502,
      error: `OpenAI could not accept the ${feature} request. Check the configured model and try again.`,
    };
  }
  return {
    status: 502,
    error: `OpenAI ${feature} generation could not be completed. Please try again.`,
  };
}
