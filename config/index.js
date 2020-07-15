const currentApp = 'government';
module.exports = {
    production: {
        routerPath: {
            government: '/government',
        },
        domain: '',
        currentApp
    },
    development: {
        routerPath: {
            government: '/government',
        },
        domain: '',
        currentApp
    }
}[process.env.NODE_ENV || 'development']