const express = require("express")
const mongoose = require("mongoose")
const app = express()
const route = require("./src/routes/route")

app.use(express.json())

mongoose.connect("mongodb+srv://ShadaabIqbal:9dwgAZ6YUEdRiDyx@mycluster.cuj3crc.mongodb.net/ShadaabIqbal-DB-Coin?retryWrites=true&w=majority", {
    useNewUrlParser: true
}, mongoose.set("strictQuery", false))
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port' + " " + (process.env.PORT || 3000))
})

