const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const bookRoutes = require('./routes/bookRoute');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/auth', userRoutes);
app.use('/book', bookRoutes);

mongoose
  .connect('mongodb://localhost:27017/userAuth', {
    // useNewUrlParser: true,
    // useUniFiedTopology: true,
  })
  .then(() => console.log('mongoDB Connected'))
  .catch((err) => console.log('Connection Error: ', err));

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
