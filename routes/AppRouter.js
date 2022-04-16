const Router = require('express').Router()
const OwnerRouter = require('./OwnerRouter')
const BusinessRouter = require('./BusinessRouter')
const LogRouter = require('./LogRouter')
const EmployeeRouter = require('./EmployeeRouter')
const JobRouter = require('./JobRouter')
const EntryRouter = require('./EntryRouter')

Router.use('/Owners', OwnerRouter)
Router.use('/Businesses', BusinessRouter)
Router.use('/Logs', LogRouter)
Router.use('/Employees', EmployeeRouter)
Router.use('/Jobs', JobRouter)
Router.use('/Entries', EntryRouter)

module.exports = Router
