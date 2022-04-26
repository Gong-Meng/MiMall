let baseURL

switch (process.env.NODE_ENV) {
    case 'dev':
        baseURL = 'http://dev-mail-pre.springboot.cn/api'
        break
    case 'prev':
        baseURL = 'http://prev-mail-pre.springboot.cn/api'
        break
    case 'prod':
        baseURL = 'http://prod-mail-pre.springboot.cn/api'
        break
    default:
        baseURL = 'http://prod-mail-pre.springboot.cn/api'
        break
}

export default {
    baseURL
}