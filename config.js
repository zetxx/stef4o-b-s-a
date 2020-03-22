const config = {
    appName: 'bike-repair',
    admin: {
        port: 8080
    },
    client: {
        port: 34567
    },
    svgRootUrl: 'http://127.0.0.1:34567/qrInfo/'
};

module.exports = {
    ...config,
    mongoConnect: `mongodb://localhost:27017/${config.appName}`
};