/**
* call library
*/
const express = require("express")
const router = express.Router()
const Waiter = require('../models/Waiter')
const Table = require('../models/Table')
const { check, validationResult } = require('express-validator')
const moment = require('moment');
const waiterController = require('../controllers/waiter.controller')
moment().format();

/**
* middleware
*/
isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated() && ( req.user.isWaiter() || req.user.isAdmin() ) ) return next()
    res.redirect('/users/login')
}


router.get('/all/:page?',isAuthenticated, waiterController.all_waiter)


router.get('/new',isAuthenticated, waiterController.render_waiter)


router.post('/new',isAuthenticated, [
    check('firstname').isLength({min: 5}).withMessage('firstname should be more than 5 char'),
    check('lastname').isLength({min: 1}).withMessage('lastname should be more than 1 char'),
    check('email').isLength({min: 5}).withMessage('email should be more than 5 char'),
    check('postcode').isLength({min: 5}).withMessage('postcode should be more than 5 char')
] , waiterController.new_waiter)


router.get('/single/:id',isAuthenticated, waiterController.find_waiter_by_id)


router.get('/edit/:id',isAuthenticated, waiterController.edit_waiter_by_id)


router.post('/update',isAuthenticated,[
    check('firstname').isLength({min: 5}).withMessage('firstname should be more than 5 char'),
    check('lastname').isLength({min: 1}).withMessage('lastname should be more than 1 char'),
    check('email').isLength({min: 5}).withMessage('email should be more than 5 char'),
    check('postcode').isLength({min: 5}).withMessage('postcode should be more than 5 char')
], waiterController.update_waiter_by_id)


router.post('/delete',isAuthenticated, waiterController.delete_waiter_by_id)

module.exports = router