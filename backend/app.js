import express from 'express';
const app = express();
import mongoose from 'mongoose';
app.use(express.json());
import cors from 'cors';
app.use(cors());

//MongoDB Connection-------------------------------------------------------------------------------------------------
MONGO_URI="mongodb+srv://mmb01217:flamingoZ2@cluster0.dhfkb7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,    
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

//Multer----------------------------------------------------------------------------------------------------------------
import multer from 'multer';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = file.originalname
    cb(null, uniqueSuffix)
  }
})
const upload = multer({ storage: storage })

//APIs-------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Welcome to the Paper API');
});

app.post('/papers', upload.single('file'), async (req, res) => {
  console.log(req.file);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

const multer = require('multer');   