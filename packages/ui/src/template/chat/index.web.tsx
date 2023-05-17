import { getApiHello } from 'api';
import { GetApiHello200 } from 'api/src';
import React, { useEffect, useState } from 'react';

import { SharedChatTemplate, SharedChatIndexTemplateProps } from './shared';

export default function ChatIndexTemplate({
  children,
}: SharedChatIndexTemplateProps) {
  const [response, setResponse] = useState<GetApiHello200>();

  useEffect(function fetchOnDidMount() {
    getApiHello().then(res => {
      setResponse(res);
    });
  }, []);

  return <SharedChatTemplate {...response}>;{children}</SharedChatTemplate>;
}
