import { ModuleTree } from 'vuex';

const files = require.context('.', false, /\.module\.ts$/);
const modules: ModuleTree<unknown> = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.module\.ts)/g, '')] = files(key).default;
});

export default modules;
