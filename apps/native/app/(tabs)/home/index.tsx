import type { GetApiPostResult } from 'api';
import { getApiPost } from 'api';
import { useEffect, useState } from 'react';
import { HomeTemplate } from 'ui';

export default function Home() {
  const [data, setData] = useState<GetApiPostResult>();

  useEffect(function fetchOnDidMount() {
    getApiPost().then(res => {
      setData(res);
    });
  }, []);

  return <HomeTemplate data={data ?? []} />;
}
