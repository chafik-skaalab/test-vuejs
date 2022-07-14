import Vue from 'vue';
// Sort alphabetically
import {
  Autocomplete,
  Button,
  Carousel,
  Checkbox,
  ConfigProgrammatic,
  Dialog,
  Dropdown,
  Field,
  Icon,
  Input,
  Loading,
  Menu,
  Modal,
  Navbar,
  Notification,
  Select,
  Sidebar,
  Skeleton,
  Snackbar,
  Switch,
  Table,
  Tag,
} from 'buefy';
import '@/assets/scss/buefy.scss';

// Sort alphabetically
Vue.use(Autocomplete);
Vue.use(Button);
Vue.use(Carousel);
Vue.use(Checkbox);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Loading);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Navbar);
Vue.use(Notification);
Vue.use(Select);
Vue.use(Sidebar);
Vue.use(Skeleton);
Vue.use(Snackbar);
Vue.use(Switch);
Vue.use(Table);
Vue.use(Tag);

ConfigProgrammatic.setOptions({
  defaultIconComponent: 'fa-icon',
  defaultIconPack: 'fas',
});
