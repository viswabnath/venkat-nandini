export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  const baseUrl = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const counterKey = "visitor_count";

  try {
    // Increment the count
    const res = await fetch(`${baseUrl}/incr/${counterKey}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) throw new Error("Failed to increment count");

    const data = await res.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        count: data.result,
        message: "Visitor count updated",
        source: "Upstash Redis",
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error("Upstash error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        count: null,
        message: "Fallback due to error",
        error: error.message,
        fallback: true
      })
    };
  }
};
