
const User = require('../models/User')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});

passport.use('local.new', new localStrategy({
    usernameField : 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req,email,password, done)=> {
    if (req.body.password != req.body.confirm_password) {
        return done(null, false, req.flash('error', 'Passwords do not match'))
    } else {
        User.findOne({email: email}, (err,user)=> {
            if(err) {
                return done(err)
            }
            if(user) {
                return done(null, false, req.flash('error', 'Email already exists'))
            }
            if (!user) {
                let newUser = new User()
                newUser.Fname = req.body.firstname
                newUser.LName = req.body.lastname
                newUser.Contact = req.body.contact
                newUser.email = req.body.email
                newUser.password = newUser.hashSyncPass(req.body.password)
                newUser.avatar = "profile.png"
                newUser.role = req.body.role
                newUser.created_at = Date.now()
                newUser.save ((err,user)=> {
                    if(!err) {
                        return done(null, user, req.flash('success', 'New User Added'))
                    } else {
                        console.log(err)
                    }
                })
            }
        })
    }
}))


passport.use('local.login', new localStrategy({
    usernameField : 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req,email,password, done)=> {

    User.findOne({email: email}, (err,user)=> {

        if (err) {
            return done(null, false, req.flash('error', 'Error...'))
        } 
        if(!user) {
            return done(null, false, req.flash('error', 'user not found'))
        }
        if (user) {
            if (user.compareSyncPass(password, user.password)) {
                return done(null,user, req.flash('success', 'Welcome Back ' + user.Fname))

            } else {
                return done(null,false, req.flash('error', 'please check your password'))

            }
        }
    })
}))