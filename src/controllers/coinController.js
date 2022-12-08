const axios = require('axios')
const coinModel = require('../model/coinModel')

const getAssets = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: 'http://api.coincap.io/v2/assets',
            header: {
                Authorization: 'Bearer 75e211be-31a4-47d0-9d12-edfaac13a5a4'
            }
        }
        let result = await axios(options)
        let data = result.data.data
        let filteredData = data.map((keys) => {
            return {
                symbol: keys.symbol,
                name: keys.name,
                marketCapUsd: keys.marketCapUsd,
                priceUsd: keys.priceUsd,
                changePercent24Hr: keys.changePercent24Hr
            }
        }).sort((a, b) => b.changePercent24Hr - a.changePercent24Hr)
        await coinModel.deleteMany()
        let createdData = await coinModel.create(filteredData)
        return res.status(200).send(createdData)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}


module.exports = { getAssets }
