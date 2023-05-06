import 'server-only';

import { getApiNotifications } from 'api';
import NotificationListTemplate from 'ui/src/template/notificationList';

import ClientBoundary from './clientBoundary';

export default async function Page() {
  const data = await getApiNotifications();

  return (
    <>
      <ClientBoundary />
      <NotificationListTemplate data={data} />
    </>
  );
}
