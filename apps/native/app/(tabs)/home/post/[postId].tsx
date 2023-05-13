import { GetApiPostPostIdResult, getApiPostPostId } from 'api';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import PostIdTemplate from 'ui/src/template/post/[postId]/index';

export default function Home() {
  const { postId, sharedTransitionTag } = useLocalSearchParams<{
    postId: string;
    sharedTransitionTag: string;
  }>();
  const [data, setData] = useState<GetApiPostPostIdResult>();

  useEffect(function fetchOnDidMount() {
    getApiPostPostId(postId ?? '').then(res => {
      setData(res);
    });
  }, []);

  return (
    data && (
      <PostIdTemplate
        data={data}
        native={{
          sharedTransitionTag: sharedTransitionTag ?? '',
        }}
      />
    )
  );
}
