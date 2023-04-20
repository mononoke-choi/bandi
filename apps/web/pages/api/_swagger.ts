import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  apiFolder: 'pages/api',
  definition: {
    info: {
      title: 'Bandi Swagger',
      version: '0.1.0',
    },
    openapi: '3.0.0',
  },
});
export default swaggerHandler();
