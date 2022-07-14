import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
// Sort alphabetically
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faArrowUp,

  faCaretDown,
  faCaretUp,
  faChevronLeft,
  faChevronRight,
  faCog,
  faCommentAlt,

  faEllipsisV,
  faExclamationCircle,
  faEye,
  faEyeSlash,

  faFolder,
  faFolderOpen,

  faInbox,
  faInfoCircle,

  faShapes,
  faSignOutAlt,

  faUser,
  faUsers,

  faList,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Sort alphabetically
library.add(faAngleDoubleLeft);
library.add(faAngleDoubleRight);
library.add(faAngleLeft);
library.add(faAngleRight);
library.add(faArrowUp);

library.add(faCaretDown);
library.add(faCaretUp);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faCog);
library.add(faCommentAlt);

library.add(faEllipsisV);
library.add(faExclamationCircle);
library.add(faEye);
library.add(faEyeSlash);

library.add(faFolder);
library.add(faFolderOpen);

library.add(faInbox);
library.add(faInfoCircle);

library.add(faShapes);
library.add(faSignOutAlt);

library.add(faUser);
library.add(faUsers);

library.add(faList);
library.add(faThLarge);

Vue.component('fa-icon', FontAwesomeIcon);
