import { GetApiHello200 } from 'api/src/__generated__/APISpecification.generated.schemas';
import { getApiHello } from 'api/src/__generated__/sample/sample';
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
