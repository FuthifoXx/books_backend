const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const bookRoutes = require('./routes/bookRoute');
const shopRoutes = require('./routes/shopRoute');
const app = express();
const PORT = 3000;
const live_uri =
  'mongodb+srv://futhifoxmaseko:FuthiFoXx_54140@cluster0.y7f3g.mongodb.net/myStore?retryWrites=true&w=majority&appName=Cluster0';
//VeMnaP68YmymgWti

app.get('/', (req, res) => {
  res.send('api is ready!!!');
});

app.use(cors());
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/book', bookRoutes);
app.use('/shop', shopRoutes);

mongoose
  .connect(live_uri)
  .then(() => console.log('mongoDB Connected'))
  .catch((err) => console.log('Connection Error: ', err));

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
