// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve('.', `cypress.${file}.json`)

    return fs.readJson(pathToConfigFile)
}

////CYPRESS_BASE_URL=http://localhost:3000

// plugins file
module.exports = (on, config) => {
    // accept a configFile value or use development by default
    const file = config.env.configFile || 'development'

    return getConfigurationByFile(file)
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
