export const getBaseUrl = () => {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  if (process.env.EAS_BUILD || process.env.VERCEL_URL) {
    // if you build api package on cloud server, they must be pass their platform specific built in environment variables
    return `https://<YOUR_WEB_URL>.vercel.app`;
  } else {
    // otherwise, we would guess runtime environment as local development
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }

  // If you want to divide into more stages, try the values below!
  // Vercel: NEXT_PUBLIC_VERCEL_ENV = production, preview, development
  // EAS: EAS_BUILD_PROFILE = production, preview, development (It's up to you how to name it in eas.json file)
};
