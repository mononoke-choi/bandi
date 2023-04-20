import defineConfig from 'orval';

import ENV from './env.json';

defineConfig({
  hooks: {
    afterAllFilesWrite: 'eslint --fix',
  },
  input: {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    target: `${ENV[process.env.APP_ENV].API_END_POINT}/api/_swagger`,
  },
  output: {
    clean: true,
    mode: 'tags-split',
    override: {
      mutator: {
        name: 'customClient',
        path: 'src/mutator.ts',
      },
      requestOptions: true,
      useDates: true,
    },
    prettier: true,
    target: 'src/__generated__/APISpecification.generated.ts',
  },
});
