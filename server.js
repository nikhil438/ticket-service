const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors');
const ticketBooking = require('./controller/ticket-booking')
const analytics = require('./controller/analytics')
const secure = require('./middleware/secure-gateway')
const ENV_VARS = require('dotenv').config({ path: __dirname + '/.env' }).parsed
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger')

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(secure)

app.use('/ticket-booking', ticketBooking)
app.use('/analytics', analytics)

app.get("/", function (req, res) {
    res.send("Welcome to ticket service");
})

Object.entries(ENV_VARS).forEach(([key, val]) => {
    process.env[key] = val
})

const PORT = process.env.PORT
app.listen(PORT, function () {
    console.log(`Application running on port ${PORT}`);
})