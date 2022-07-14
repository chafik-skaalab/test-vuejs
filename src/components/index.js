import Vue from 'vue';
import { upperFirst, camelCase } from 'lodash';

// Globally register all base components for convenience, because they will be used very frequently.
// Components are registered using the kebab-cased version of their file name.
// @see https://fr.vuejs.org/v2/guide/components-registration.html
// @see https://github.com/bencodezen/vue-enterprise-boilerplate/blob/main/src/components/_globals.js
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  true,
  // Only include "Base" prefixed .vue files
  /(Base|Page|Ui)[A-Z]\w+\.(vue|js)$/,
);

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName);

  // Get the kebab-cased version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        // Remove the file extension from the end
        .replace(/\.\w+$/, ''),
    ),
  );

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});
