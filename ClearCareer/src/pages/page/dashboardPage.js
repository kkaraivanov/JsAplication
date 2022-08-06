import dashboardTemplate from '../templates/dashboard.js'
import {dataService} from './lib.js'

export default (ctx) => {
    dataService.getAll()
        .then(data => {
            ctx.render(dashboardTemplate(data))
        });
    
}