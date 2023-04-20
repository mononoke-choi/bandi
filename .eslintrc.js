module.exports = {
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],

  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
