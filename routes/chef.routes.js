
const express = require("express")
const router = express.Router()
const Chef = require('../models/Chef')
const { check, validationResult } = require('express-validator')
const moment = require('moment');
const chefController = require('../controllers/chef.controller')
moment().format();

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated() && ( req.user.isChef() || req.user.isAdmin() )) return next()
    res.redirect('/users/login')
}

router.get('/all/:page?',isAuthenticated, chefController.all_chef)


router.get('/new',isAuthenticated, chefController.render_chef)

router.post('/new',isAuthenticated, [
    check('firstname').isLength({min: 5}).withMessage('firstname should be more than 5 char'),
    check('lastname').isLength({min: 1}).withMessage('lastname should be more than 1 char'),
    check('email').isLength({min: 5}).withMessage('email should be more than 5 char'),
    check('experience').isLength({min: 5}).withMessage('experience should be more than 5 char'),
    check('type').isLength({min: 5}).withMessage('type should be more than 5 char'),
    check('postcode').isLength({min: 5}).withMessage('postcode should be more than 5 char')
] , chefController.new_chef)

router.get('/single/:id',isAuthenticated, chefController.find_chef_by_id)

router.get('/edit/:id',isAuthenticated, chefController.edit_chef_by_id)

router.post('/update',isAuthenticated,[
    check('firstname').isLength({min: 5}).withMessage('firstname should be more than 5 char'),
    check('lastname').isLength({min: 1}).withMessage('lastname should be more than 1 char'),
    check('email').isLength({min: 5}).withMessage('email should be more than 5 char'),
    check('experience').isLength({min: 5}).withMessage('experience should be more than 5 char'),
    check('type').isLength({min: 5}).withMessage('type should be more than 5 char')
], chefController.update_chef_by_id)

router.post('/delete',isAuthenticated, chefController.delete_chef_by_id)

module.exports = router