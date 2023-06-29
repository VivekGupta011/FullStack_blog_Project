const express = require('express'),
  app = express(),
  mongoose = require('mongoose');
var User = require('../server/modal/user');

//Connect to database
try {
  mongoose.connect(
    'mongodb+srv://vivekgupta:7GSQyaEKzzXuJXZD@cluster0.k1zinyk.mongodb.net/?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log('connected to db');
} catch (error) {
  handleError(error);
}
process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', error.message);
});

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.post(
  '/send',
  (signup = async (req, res) => {
    // try {
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      role: req.body.role,
      password: req.body.password,
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Something went wrong!' });
    }

    // user.save((err, user) => {
    //   if (err) {
    //     res.status(500).send('Failed!');
    //     return;
    //   } else {
    //     res.status(200).send({
    //       message: 'User Registered successfully',
    //     });
    //   }
    // });
    // } catch (error) {
    //   res.status(500).send({
    //     message: 'User Registered failed!',
    //   });
    // }
  })
);
app.get('/users', (req, res) => {
  res.send('Hello USerSs...');
});

//setup server to listen on port 8080
app.listen(4000, () => {
  console.log('Server is live on port 4000');
});
