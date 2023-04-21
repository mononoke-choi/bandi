import defineConfig from 'orval';

defineConfig({
  hooks: {
    afterAllFilesWrite: 'eslint --fix',
  },
  input: {
    target: 'http://localhost:3000/api/_swagger',
  },
  output: {
    clean: true,
    mode: 'single',
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
