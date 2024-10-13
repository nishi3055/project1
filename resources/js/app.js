
import './bootstrap';
import './calendar';
import axios from 'axios';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

// CSRF トークンの設定
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

Alpine.start();