import httpService from '../../../common/httpService'
import config from '../../../config'

let conf = params => httpService.postJson(config.domain + '/api/activity/wheelSurf/conf', params);
let start = params => httpService.postJson(config.domain + '/api/activity/wheelSurf/start', params);
let prize = params => httpService.postJson(config.domain + '/api/activity/wheelSurf/user/prize', params);
let resource = query => httpService.get(config.domain + '/api/common/resource', query);

export default {conf, start, prize, resource};