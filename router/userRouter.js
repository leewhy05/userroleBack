const mongoose = require('mongoose')
const express = require('express');
const USER_ROLE = require('../model/userRoleModel')
const router = express.Router();
const {create_user, getAll_users, update_user, single_user, delete_user} =require('../userController/userController')



//post user c --- for create
router.post('/api/user',create_user)

// get user, R -- for read
router.get('/api/user', getAll_users)

// update user, U -- for update 
router.patch('/api/user/:id', update_user)

// single user, U -- for one user 

router.get('/api/user/:id', single_user)

// delete user, U -- for delete
router.delete('/api/user/:id', delete_user)


  module.exports = router