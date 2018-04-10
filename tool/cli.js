'use strict'

var fs = require('fs-plus')
var path = require('path')
var yargs = require('yargs')
var generate = require('./tpl/generate')

yargs.command(['add <componentName>', 'a'], 'Add a component to project', {
    type: {
      alias: 't',
      describe: 'The component type',
      choices: ['view', 'component'],
      default: 'view'
    },
    help: {
      alias: 'h'
    }
  }, function (args) {
    let componentPath = args.componentName
    let componentName = componentPath.substr(componentPath.lastIndexOf('/') + 1)
    let ComponentName = componentName[0].toLocaleUpperCase() + componentName.substr(1)

    args.type += 's'
    componentPath = path.join(__dirname, '../src', args.type, componentPath)
    generate(args.type, componentPath, {
      componentName: componentName,
      ComponentName: ComponentName
    })
  })
  .version(function () {
    return require('../package.json').version
  })
  .alias('version', 'v')
  .help()
  .argv
