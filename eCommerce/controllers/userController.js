// userController.js
// const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middleware/catchAsyncError')
const User = require('../models/userModel')

// Register user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body
  const user = new User({
    name,
    email,
    password,
  })
  await user.save()
  
})

