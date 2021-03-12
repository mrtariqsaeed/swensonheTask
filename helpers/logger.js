
function info(msg) {
    console.log(msg)
}

function debug(msg) {
    console.debug(msg)
}

function error(msg) {
    console.error(msg)
}

module.exports = {
    info,
    debug,
    error
}