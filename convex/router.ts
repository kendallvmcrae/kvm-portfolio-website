import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

// Serve static assets
http.route({
  path: "/*",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    // This will serve files from your deployed static assets
    return new Response(null, { status: 404 });
  }),
});

export default http;