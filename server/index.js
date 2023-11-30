const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");//require is used for loading external files
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => res.json({msg: "Welcome!"}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://muditp22:<password>@cluster0.t9kl0pk.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Courses" });

app.listen(3000, () => console.log('Server running on port 3000'));
