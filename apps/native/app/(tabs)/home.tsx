import { getApiPosts } from 'api/src';
import { useEffect, useState } from 'react';
import HomeTemplate from 'ui/src/template/home';
import { Post } from 'web/app/api/posts/post';

export default function Home() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(function fetchOnDidMount() {
    getApiPosts().then(res => {
      setData(res);
    });
  }, []);

  return <HomeTemplate data={data} />;
}
