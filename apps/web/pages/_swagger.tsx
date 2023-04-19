import 'swagger-ui-react/swagger-ui.css';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { createSwaggerSpec } from 'next-swagger-doc';
import type { SwaggerUIProps } from 'swagger-ui-react';

const SwaggerUI = dynamic(import('swagger-ui-react'), { ssr: false });

export default function ApiDoc({
  spec,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: SwaggerUIProps['spec'] = createSwaggerSpec({
    definition: {
      info: {
        title: `Bandi Swagger`,
        version: '0.1.0',
      },
      openapi: '3.0.0',
    },
  });

  return {
    props: {
      spec,
    },
  };
};
