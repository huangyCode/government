const currentApp = 'government';
module.exports = {
    production: {
        routerPath: {
            government: '',
        },
        domain: '',
        currentApp
    },
    development: {
        routerPath: {
            government: '',
        },
        domain: '',
        currentApp
    }
}[process.env.NODE_ENV || 'development']