const mongoose = require('mongoose')

const modelFactory = {}
const connFactory = {}

const openConnection = (url) => {
    return new Promise(async (resolve, reject) => {
        if (!connFactory[url]) {
            connFactory[url] = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
            connFactory[url].on('error', async () => {
                console.error.bind(console, 'connection error:')
                reject()
                connFactory[url] = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
            });
            connFactory[url].once('open', () => {
                console.log('db connection established : ', mongoose.connections.length)
                resolve(connFactory[url])
            });
        } else {
            resolve(connFactory[url])
        }
    })
}

const getModel = async (file) => {
    try {
        const conn = await openConnection(process.env.MONGODB_URL)
        let model = modelFactory[file];
        if (model) {
            return model
        }
        const { NAME, SCHEMA } = require('../schema/' + file)
        model = conn.model(NAME, SCHEMA)
        modelFactory[file] = model;
        return model
    } catch (error) {
        console.error(error)
        throw error
    }
}

module.exports = { getModel }