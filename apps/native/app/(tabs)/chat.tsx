import { getApiHello } from 'api/src/__generated__/sample/sample';
import { useEffect } from 'react';
import Wip from 'ui/src/template/wip';

export default function Chat() {
  useEffect(function fetchOnDidMount() {
    getApiHello().then(res => {
      alert(JSON.stringify(res));
    });
  }, []);

  return <Wip />;
}
