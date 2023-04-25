
const express = require("express")
const router = express.Router()
const dashboardController = require('../controllers/dashboard.controller')


isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated() && req.user.isAdmin()) return next()
    res.redirect('/users/login')
}


router.get('/',isAuthenticated, dashboardController.render_dashboard_count)

module.exports = router