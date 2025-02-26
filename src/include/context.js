
import ApplicationService, { Context } from '../services/applicationService/applicationService.js';
if (!Context.application) {
    new ApplicationService();
}

export default Context;
