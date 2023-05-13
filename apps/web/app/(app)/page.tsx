import 'server-only';
import { getApiPosts } from 'api';
import HomeTemplate from 'ui/src/template/home';

import ClientBoundary from './clientBoundary';

export default async function Home() {
  const data = await getApiPosts();

  return (
    <>
      <ClientBoundary />
      <HomeTemplate data={data} />
    </>
  );
}
