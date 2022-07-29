import {page} from './index.js'
import { middleware } from './middlewareService.js';
import { views } from './views/index.js';

page(middleware.authorize);
page(middleware.nvaigation);
page(middleware.content);

views.map(x => page(x.url, x.view))

page.start()