import { getApiHello } from 'api';
import { GetApiHello200 } from 'api/src';
import React, { useCallback, useState } from 'react';

import { useRefetchOnFocus } from '../../hook/useRefetchOnFocus';

import { SharedChatTemplate, SharedChatIndexTemplateProps } from './shared';

export default function ChatIndexTemplate(_: SharedChatIndexTemplateProps) {
  const [response, setResponse] = useState<GetApiHello200>();

  useRefetchOnFocus(
    useCallback(function fetchHelloApi() {
      getApiHello().then(res => {
        setResponse(res);
      });
    }, []),
    true,
  );

  return <SharedChatTemplate {...response} />;
}
