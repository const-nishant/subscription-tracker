import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const aj = arcjet({
  key: ARCJET_KEY,
  characteristics: ["ip.src", "http.user_agent"],
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "USER_AGENT_PREFIX:PostmanRuntime"],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
  beforeResolve: async (ctx) => {
    const ua = ctx.characteristics["http.user_agent"] || "";
    const ip = ctx.characteristics["ip.src"] || "";

    // 🔥 Allow localhost (127.0.0.1) and Postman
    if (ip === "127.0.0.1" || ua.startsWith("PostmanRuntime")) {
      ctx.result.action = "allow";
      ctx.result.reason = "Allowed localhost or Postman in dev mode";
    }
  },
});

export default aj;
