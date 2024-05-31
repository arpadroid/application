
import ApplicationService, { Context } from '../services/applicationService/applicationService.js';
if (!Context.Application) {
    new ApplicationService();
}

export default Context;
