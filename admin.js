const mongoose = require('mongoose');
const express = require('express');
const uuid = require('uuid').v4;
const formidableMiddleware = require('express-formidable');
const AdminBro = require('admin-bro');
const AdminBroExpressjs = require('admin-bro-expressjs');
const qr = require('qr-image');
const config = require('./config');

AdminBro.registerAdapter(require('admin-bro-mongoose'));

const app = express();
app.use(formidableMiddleware());

app.get('/', (req, res) => res.send('Hello World!'));

const adminBro = new AdminBro({
    resources: require('./resources'),
    rootPath: '/admin',
    branding: {companyName: 'Amazing c.o.'},
    locale: {
        translations: {
            labels: {
                ServiceItem: 'Item',
                ResourceItem: 'Item',
                ServiceAction: 'Action'
            }
        }
    }
});

const router = AdminBroExpressjs.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

app.get('/qrcode/gen/:id', async ({params: {id}}, res) => {
    res.setHeader('Content-type', 'image/svg+xml');
    qr.image(`${config.svgRootUrl}${id}`, {type: 'svg'}).pipe(res);
});

const run = async () => {
    await mongoose.connect(`${config.mongoConnect}`, {useNewUrlParser: true})
    await app.listen(config.admin.port, () => console.log(`Example app listening on port ${config.admin.port}!`))
}

run()