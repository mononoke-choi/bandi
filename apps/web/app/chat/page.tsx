'use client';

import 'client-only';
import { getApiHello } from 'api';
import React, { useEffect } from 'react';
import Wip from 'ui/src/template/wip';

export default function Page() {
  useEffect(function fetchOnDidMount() {
    getApiHello().then(res => {
      alert(JSON.stringify(res));
    });
  }, []);

  return <Wip />;
}
