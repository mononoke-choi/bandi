import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef } from 'react';

/**
 *  if you want to refetch the query when a React Native Screen is focused
 * again.
 *
 *  This hook will call the provided refetch function when the screen is
 * focused again.
 *
 * @example
 * ```js
 *   const { refetch } = useQuery('movies', fetchMovies);
 *   useRefreshOnFocus(refetch);
 * ```
 *
 * if you need some detail example how to use this hook please check this out
 *
 * {@link https://codesandbox.io/s/github/tanstack/query/tree/main/examples/react/react-native?from-embed=&file=/src/screens/MoviesListScreen.tsx}.
 *
 */
const useRefreshOnFocus = <T>(refetch: () => Promise<T>) => {
  const firstTimeRef = useRef(true);

  useFocusEffect(
    useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch]),
  );
};

export { useRefreshOnFocus };
