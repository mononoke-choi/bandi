"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getApiHello: () => getApiHello,
  getApiNotifications: () => getApiNotifications,
  getApiPostPostId: () => getApiPostPostId,
  getApiPosts: () => getApiPosts
});
module.exports = __toCommonJS(src_exports);

// ../../apps/web/service/getBaseUrl.ts
var getBaseUrl = () => {
  const runtimeEnv = process.env.TAMAGUI_TARGET;
  const profile = process.env.APP_ENV;
  const localHost = `http://localhost:${process.env.PORT ?? 3e3}`;
  const VercelUrl = process.env.VERCEL_URL;
  if (runtimeEnv === "web") {
    if (VercelUrl) {
      return `https://${VercelUrl}`;
    } else {
      return localHost;
    }
  } else {
    if (profile === "production") {
      return `https://<YOUR_WEB_URL>.vercel.app`;
    } else {
      return localHost;
    }
  }
};

// src/mutator.ts
var customClient = async ({ url, method, params, headers, signal, data }, nextConfig) => {
  const searchParams = params ? `?${new URLSearchParams(params)}` : "";
  const response = await fetch(getBaseUrl() + url + searchParams, {
    headers: {
      ...headers
    },
    method,
    next: nextConfig,
    signal,
    ...data ? { body: JSON.stringify(data) } : {}
  });
  if (response.ok) {
    return await response.json();
  } else {
    const parsedJSON = await response.json();
    throw new Error(`[NetworkError] ${JSON.stringify(parsedJSON)}`, {
      cause: { status: response.status, ...parsedJSON }
    });
  }
};

// src/__generated__/APISpecification.generated.ts
var getApiHello = (options) => {
  return customClient(
    { url: `/api/hello`, method: "get" },
    options
  );
};
var getApiNotifications = (options) => {
  return customClient(
    { url: `/api/notifications`, method: "get" },
    options
  );
};
var getApiPostPostId = (postId, options) => {
  return customClient(
    { url: `/api/post/${postId}`, method: "get" },
    options
  );
};
var getApiPosts = (options) => {
  return customClient(
    { url: `/api/posts`, method: "get" },
    options
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getApiHello,
  getApiNotifications,
  getApiPostPostId,
  getApiPosts
});
