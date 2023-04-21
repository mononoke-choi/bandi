import { GetApiHello200, getApiHello } from 'api';
import React, { useEffect, useState } from 'react';

export default function ClientFetch() {
  const [response, setResponse] = useState<GetApiHello200>(null);

  useEffect(function fetchOnDidMount() {
    getApiHello().then(res => {
      setResponse(res);
    });
  }, []);

  return <p>{response?.message}</p>;
}
