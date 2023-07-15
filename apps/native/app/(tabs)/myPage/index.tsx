import { useScrollProps } from '@bacons/expo-router-top-tabs';
import { Animated } from 'react-native';
import { MyPageTemplate } from 'ui';

export default function Index() {
  const scroll = useScrollProps();

  return (
    <Animated.ScrollView {...scroll}>
      <MyPageTemplate />
    </Animated.ScrollView>
  );
}
