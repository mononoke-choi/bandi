type CustomClient = {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    params?: Record<string, any>;
    headers?: HeadersInit;
    data?: BodyType<unknown>;
    signal?: AbortSignal;
};
declare const customClient: <ResponseType_1>({ url, method, params, headers, signal, data }: CustomClient, nextConfig: RequestInit['next']) => Promise<ResponseType_1>;

type BodyType<BodyData> = BodyData;

/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Bandi Swagger
 * [openapi.json](/api/swagger)
 * OpenAPI spec version: 0.1.0
 */

type GetApiNotifications200Item = {
    title: string;
    date: string;
};
type GetApiHello200 = {
    message: string;
};
type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never;
/**
 * say hello

 * @summary greeting
 */
declare const getApiHello: (options?: SecondParameter<typeof customClient>) => Promise<GetApiHello200>;
/**
 * recent notification list

 * @summary config
 */
declare const getApiNotifications: (options?: SecondParameter<typeof customClient>) => Promise<GetApiNotifications200Item[]>;
type GetApiHelloResult = NonNullable<Awaited<ReturnType<typeof getApiHello>>>;
type GetApiNotificationsResult = NonNullable<Awaited<ReturnType<typeof getApiNotifications>>>;

export { GetApiHello200, GetApiHelloResult, GetApiNotifications200Item, GetApiNotificationsResult, getApiHello, getApiNotifications };