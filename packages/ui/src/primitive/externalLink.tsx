import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import React, { ComponentProps } from 'react';
import { Platform } from 'react-native';

export default function ExternalLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      hrefAttrs={{
        // On web, launch the link in a new tab.
        target: '_blank',
      }}
      {...props}
      onPress={e => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault();
          // Open the link in an in-app browser.
          openBrowserAsync(props.href as string);
        }
      }}
    />
  );
}
