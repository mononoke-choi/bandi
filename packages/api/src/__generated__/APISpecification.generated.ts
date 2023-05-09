/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Bandi Swagger
 * [openapi.json](/api/swagger)
 * OpenAPI spec version: 0.1.0
 */
import { customClient } from '../mutator';
export type GetApiPosts200ItemMeta = {
  createdAt: string;
  location: string;
};

export type GetApiPosts200Item = {
  description: string;
  img: string;
  meta: GetApiPosts200ItemMeta;
  title: string;
};

export type GetApiNotifications200Item = {
  title: string;
  date: string;
};

export type GetApiHello200 = {
  message: string;
};

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * say hello

 * @summary greeting
 */
export const getApiHello = (options?: SecondParameter<typeof customClient>) => {
  return customClient<GetApiHello200>(
    { url: `/api/hello`, method: 'get' },
    options,
  );
};

/**
 * recent notification list

 * @summary config
 */
export const getApiNotifications = (
  options?: SecondParameter<typeof customClient>,
) => {
  return customClient<GetApiNotifications200Item[]>(
    { url: `/api/notifications`, method: 'get' },
    options,
  );
};

/**
 * recent post list

 * @summary post
 */
export const getApiPosts = (options?: SecondParameter<typeof customClient>) => {
  return customClient<GetApiPosts200Item[]>(
    { url: `/api/posts`, method: 'get' },
    options,
  );
};

export type GetApiHelloResult = NonNullable<
  Awaited<ReturnType<typeof getApiHello>>
>;
export type GetApiNotificationsResult = NonNullable<
  Awaited<ReturnType<typeof getApiNotifications>>
>;
export type GetApiPostsResult = NonNullable<
  Awaited<ReturnType<typeof getApiPosts>>
>;
