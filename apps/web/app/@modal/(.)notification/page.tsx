import 'server-only';
import { getApiNotifications } from 'api/src';

import ClientBoundary from './clientBoundary';

export default async function Page() {
  const data = await getApiNotifications();

  return <ClientBoundary data={data} />;
}
