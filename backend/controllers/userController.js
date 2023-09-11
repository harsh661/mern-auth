import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

// @desc user token
// route /api/users/auth
// @method post
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" })
})

// @desc register user
// route /api/users
// @method post
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }

  const hashedPassword = bcrypt.hashSync(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if(!user) {
    res.status(400)
    throw new Error('Invalid data')
  }

  generateToken(res, user._id)

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  })
})

// @desc logout user
// route /api/users/logout
// @method post
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" })
})

// @desc get user profile
// route /api/users/profile
// @method get
const getUserProfile = asyncHandler(async (req, res) => {
  const {email} = req.body
  const user = await User.findOne({email})
  res.status(200).json({ data: user })
})

// @desc update user profile
// route /api/users/profile
// @method put
const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const updateCredentials = {
    name,
    email,
    password,
  }

  const updatedUser = await User.findOneAndUpdate({email}, updateCredentials)

  res.status(200).json({ message: `User updated at ${updatedUser.updatedAt}`})
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
