import { useState } from 'react';

/**
 *  if you want to refetch the query when you pull to refresh inside a
 * ScrollView or ListView
 *
 *  This hook will call the provided refetch function When the ScrollView is at
 * scrollY: 0, swiping down triggers an onRefresh event.
 *
 * @example
 * ```jsx
 *   const { refetch } = useQuery('movies', fetchMovies);
 *   const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
 *
 *   return (
 *     <ScrollView
 *         refreshControl={
 *           <RefreshControl
 *             refreshing={isRefetchingByUser}
 *             onRefresh={refetchByUser}
 *           />
 *         }
 *      />
 *   )
 * ```
 *
 * if you need some detail example how to use this hook please check this out
 *
 * {@link https://codesandbox.io/s/github/tanstack/query/tree/main/examples/react/react-native?from-embed=&file=/src/screens/MovieDetailsScreen.tsx}.
 *
 */
const useRefreshByUser = <T>(refetch: () => Promise<T>) => {
  const [isRefetchingByUser, setIsRefetchingByUser] = useState(false);

  async function refetchByUser() {
    setIsRefetchingByUser(true);

    try {
      await refetch();
    } finally {
      setIsRefetchingByUser(false);
    }
  }

  return {
    isRefetchingByUser,
    refetchByUser,
  };
};

export { useRefreshByUser };
