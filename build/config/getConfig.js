const fs = require('fs-plus')
const path = require('path')
const _ = require('lodash')

const getConfig = function () {
  const env = process.env.APP_ENV || 'dev'
  const def = JSON.parse(fs.readFileSync(path.join(__dirname, 'default.json'), 'utf-8'))
  const usrPath = path.join(__dirname, 'user.json')
  let usr = {}
  if(fs.existsSync(usrPath)) {
    usr = JSON.parse(fs.readFileSync(path.join(__dirname, 'user.json'), 'utf-8'))
  }

  const cfg = _.extend(def, usr);

  return cfg[env] || {}
}

module.exports = getConfig
// getConfig()
