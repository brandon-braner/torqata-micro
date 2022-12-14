const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   */
  remotes: [
    ['about', 'http://localhost:4201'],
    // ['app2', 'https://app2.example.com'],
  ],
});
