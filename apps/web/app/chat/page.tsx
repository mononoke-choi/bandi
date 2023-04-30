'use client';

import 'client-only';
import { getApiHello } from 'api';
import React, { useEffect } from 'react';
import { Text } from 'tamagui';
import AppHeader, { AppHeaderProps } from 'ui/src/primitive/appHeader';
import Wip from 'ui/src/template/wip';

const Title: AppHeaderProps['title'] = styles => <Text {...styles}>Chat</Text>;
export default function Page() {
  useEffect(function fetchOnDidMount() {
    getApiHello().then(res => {
      alert(JSON.stringify(res));
    });
  }, []);

  return (
    <>
      <AppHeader title={Title} />
      <Wip />
    </>
  );
}
