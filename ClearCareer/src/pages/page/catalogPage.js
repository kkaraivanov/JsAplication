import catalogTemplate from '../templates/catalog.js'
import {dataService} from './lib.js'

export default (ctx) => {
    dataService.getAll()
        .then(data => {
            ctx.render(catalogTemplate(data))
        });
    
}