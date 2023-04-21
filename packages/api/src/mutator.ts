import Constants from 'expo-constants';

type CustomClient = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  params?: Record<string, any>;
  headers?: HeadersInit;
  data?: BodyType<unknown>;
  signal?: AbortSignal;
};

const customClient = async <ResponseType>(
  { url, method, params, headers, signal, data }: CustomClient,
  nextConfig: RequestInit['next'],
): Promise<ResponseType> => {
  const response = await fetch(
    (Constants.expoConfig?.extra?.API_END_POINT ?? '') +
      url +
      '?' +
      new URLSearchParams(params),
    {
      headers: {
        ...headers,
      },
      method,
      next: nextConfig,
      signal,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  if (response.ok) {
    return await response.json();
  } else {
    const parsedJSON = await response.json();

    throw new Error(`[NetworkError] ${JSON.stringify(parsedJSON)}`, {
      cause: { status: response.status, ...parsedJSON },
    });
  }
};

export { customClient };

export type ErrorType<ErrorData> = {
  cause: {
    status: number;
  } & ErrorData;
};
export type BodyType<BodyData> = BodyData;
