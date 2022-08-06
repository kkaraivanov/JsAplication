import { page } from './providers/libraryes.js';
import ApplicationMiddleware from './middleware/index.js';
import { pages } from './pages/index.js';

const contentElement = document.querySelector('.__content');
const headerElement = document.querySelector('.__header');

page(ApplicationMiddleware.initialize);
page(ApplicationMiddleware.addHeader(headerElement));
page(ApplicationMiddleware.addContent(contentElement));

//page(ApplicationMiddleware.addQueryParser);

pages.map(p => page(p.path, p.template));

page.start();