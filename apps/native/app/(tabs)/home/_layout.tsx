import { Stack } from 'expo-router';
import React from 'react';

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
