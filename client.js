const mongoose = require('mongoose');
const express = require('express');
const config = require('./config');
const ItemInfo = require('./resources/ServiceItem/model');
const ActionsTaken = require('./resources/ServiceAction/model');
require('./resources/ResourceItem/model');
const app = express();

app.get('/qrInfo/:serviceItemId', async ({params: {serviceItemId}}, res) => {
    res.setHeader('Content-type', 'text/html');
    try {
        const item = await ItemInfo.findById(serviceItemId).populate('resourceItemId');
        if (!item) {
            res.sendStatus(404);
            res.render('404');
            return;
        }
        const actionList = (await ActionsTaken.find({serviceItemId})).map(({description}) => description).join('<hr/>');
        res.send(`
            <h1>jfnsjfd</h1><br/>
            ${actionList}
        `);
    } catch (e) {
        console.error(e);
    }
});

const run = async () => {
    await mongoose.connect(`${config.mongoConnect}`, {useNewUrlParser: true})
    await app.listen(config.client.port, () => console.log(`Example app listening on port ${config.client.port}!`))
}

run();
