import { useScrollProps } from '@bacons/expo-router-top-tabs';
import { Animated } from 'react-native';
import { Wip } from 'ui';

export default function Likes() {
  const scroll = useScrollProps();

  return (
    <Animated.ScrollView {...scroll}>
      <Wip />
    </Animated.ScrollView>
  );
}
