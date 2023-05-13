import 'server-only';
import { getApiPost } from 'api/src';
import HomeTemplate from 'ui/src/template/home';

import ClientBoundary from './clientBoundary';

export default async function Home() {
  const data = await getApiPost();

  return (
    <>
      <ClientBoundary />
      <HomeTemplate data={data} />
    </>
  );
}
