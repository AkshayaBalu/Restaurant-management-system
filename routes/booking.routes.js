
const express = require("express")
const router = express.Router()
const Booking = require('../models/Booking')
const Customer = require('../models/Customer')
const { check, validationResult } = require('express-validator')
const moment = require('moment');
const bookingController = require('../controllers/booking.controller')
moment().format();


isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated() && ( req.user.isBooking() || req.user.isAdmin() ) ) return next()
    res.redirect('/users/login')
}

router.get('/all/:page?',isAuthenticated, bookingController.all_booking)
  
router.get('/new',isAuthenticated, bookingController.render_booking)


router.post('/new',isAuthenticated, bookingController.new_booking)


router.get('/single/:id',isAuthenticated, bookingController.find_booking_by_id)


router.get('/edit/:id',isAuthenticated, bookingController.edit_booking_by_id)


router.post('/update',isAuthenticated, bookingController.update_booking_by_id)


router.post('/delete',isAuthenticated, bookingController.delete_booking_by_id)

module.exports = router