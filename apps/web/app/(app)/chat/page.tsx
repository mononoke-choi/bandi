'use client';

import 'client-only';
import React from 'react';
import { Text } from 'tamagui';
import AppHeader, { AppHeaderProps } from 'ui/src/block/appHeader.web';
import ChatIndexTemplate from 'ui/src/template/chat';

const Title: AppHeaderProps['title'] = styles => <Text {...styles}>Chat</Text>;
export default function Page() {
  return (
    <ChatIndexTemplate>
      <AppHeader title={Title} />
    </ChatIndexTemplate>
  );
}
