const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './target/dist/portlet-angular-elements/runtime-es5.js',
    './target/dist/portlet-angular-elements/polyfills-es5.js',
    './target/dist/portlet-angular-elements/scripts.js',
    './target/dist/portlet-angular-elements/main-es5.js'
  ];

  await fs.ensureDir('elements');

  await concat(files, './src/main/webapp/js/portlet-angular-elements.js');
  await fs.copyFile('./target/dist/portlet-angular-elements/styles.css', './src/main/webapp/css/portlet-angular-elements.css');
})();
