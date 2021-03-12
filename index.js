const express = require('express')
const app = express()
const port = 3000
const db = require('./helpers/db')
const logger = require('./helpers/logger')

/** Enabling the body parameters */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/**
 * PRODUCTS API
 */
app.post('/products', (req, res) => {
    logger.info('/products api is being requested!')
    logger.debug('/products api request body -> ' + JSON.stringify(req.body))

    /** Preparing the query filters */
    const body = req.body
    const filters = {
        PRODUCT_TYPE: body.PRODUCT_TYPE,
        WATER_LINE: body.WATER_LINE,
        COFFEE_FLAVOR: body.COFFEE_FLAVOR,
        PACK_SIZE: body.PACK_SIZE
    }

    /** Query the data from the database */
    const dbRes = db.dbQuery(filters)

    /** Handling the query failure */
    if (!dbRes) {
        logger.error('/products api request failed execting the databse query!')
        res.status(500).send('Database query failed!')
    }

    /** Handling the success response */
    logger.info('/products api request passed!')
    logger.debug('/products api request passed with reponse -> ' + JSON.stringify(dbRes))
    res.status(200).json(dbRes)
})

/** Starting the server */
app.listen(port, () => {
    console.log('app started ....')
})