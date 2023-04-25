/**
* call library
*/
const express = require("express")
const router = express.Router()
const Customer = require('../models/Customer')
const { check, validationResult } = require('express-validator')
const moment = require('moment');
moment().format();
const customerController = require('../controllers/customer.controller')

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated() && ( req.user.isCustomer() || req.user.isAdmin() )) return next()
    res.redirect('/users/login')
}

router.get('/all/:page?',isAuthenticated, customerController.all_customers)


router.get('/new',isAuthenticated, customerController.render_customer)


router.post('/new', [
    check('firstname').isLength({min: 5}).withMessage('firstname should be more than 5 char'),
    check('lastname').isLength({min: 1}).withMessage('lastname should be more than 1 char'),
    check('contact').isLength({min: 3}).withMessage('contact should be more than 5 char'),
    check('email').isLength({min: 5}).withMessage('email should be more than 5 char'),
    ], customerController.new_customer)


router.get('/single/:id',isAuthenticated, customerController.find_customer_by_id)


router.get('/edit/:id',isAuthenticated, customerController.edit_customer_by_id)


router.post('/update',isAuthenticated,[
    check('firstname').isLength({min: 5}).withMessage('firstname should be more than 5 char'),
    check('lastname').isLength({min: 1}).withMessage('lastname should be more than 1 char'),
    check('contact').isLength({min: 3}).withMessage('contact should be more than 5 char'),
    check('email').isLength({min: 3}).withMessage('email should be more than 5 char'),
], customerController.update_customer_by_id)


router.post('/delete',isAuthenticated, customerController.delete_customer_by_id)

module.exports = router