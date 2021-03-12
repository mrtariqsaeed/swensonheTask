const dummyData =  require('./dummyData')
const connectionString = '< DATABASE CONNECTION >'
/**
 * This file handles the database connection
 */
function dbQuery() {
    /**
     * USE filters and connectionString to retreive the data from the actual database
     */
    // Query should go here

    return dummyData // Just for testing because there is no database implemented
}

module.exports = {dbQuery}