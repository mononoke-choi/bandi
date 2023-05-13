import { getApiPosts, GetApiPostsResult } from 'api';
import { useEffect, useState } from 'react';
import HomeTemplate from 'ui/src/template/home';

export default function Home() {
  const [data, setData] = useState<GetApiPostsResult>();

  useEffect(function fetchOnDidMount() {
    getApiPosts().then(res => {
      setData(res);
    });
  }, []);

  return <HomeTemplate data={data ?? []} />;
}
