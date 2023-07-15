import { Stack } from 'expo-router';
import React from 'react';
import { HomeHeaderRight } from 'ui';

export default function Layout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={{
          animation: 'fade',
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerRight: HomeHeaderRight,
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="post/[postId]"
          options={{
            title: '',
          }}
        />
      </Stack>
    </>
  );
}
