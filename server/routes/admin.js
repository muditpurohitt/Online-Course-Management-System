const mongoose = require("mongoose");
const express = require('express');
const { User, Course, Admin } = require("../db");
const jwt = require('jsonwebtoken');
const { SECRET } = require("../middleware/auth")
const { authenticateJwt } = require("../middleware/auth");

const router = express.Router();

router.get("/me", authenticateJwt, async (req, res) => {
    const admin = await Admin.findOne({ username: req.user.username });
    if (!admin) {
      return res.status(403).json({msg: "Admin doesnt exist"})
    }
    res.json({
        username: admin.username
    })
});

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
      } 
    else {
        const newAdmin = new Admin({ username: username, password: password });
        const id = newAdmin._id.toString();
        newAdmin.save();
        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token, id });
      }
  });
  
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      const id = admin._id.toString();
      res.json({ message: 'Logged in successfully', token, id });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

  //post a new course on the dashboard
  router.post('/courses', authenticateJwt, async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    res.json({ message: 'Course created successfully', courseId: course._id });
  });

 //update a course
  router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (course) {
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });

 //get all the courses published by the admin
  router.get('/courses', authenticateJwt, async (req, res) => {
    const coursess = await Course.find({}).lean();//returns js documents
    const courses = coursess.filter(course => course.user_id == req.headers.id)
    res.json({ courses });
  });
  
  router.get('/course/:courseId', authenticateJwt, async (req, res) => {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    res.json({ course });
  });

  module.exports = router
