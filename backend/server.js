import express from 'express';
const app = express();
import mongoose from 'mongoose';
app.use(express.json());
import cors from 'cors';
app.use(cors());

//MongoDB Connection-------------------------------------------------------------------------------------------------
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true, //warning here to fix: deprecated
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
import './paper.js'; // Import the paper model to ensure it's registered
const paperSchema = mongoose.model('paper');

app.get('/', (req, res) => {
  res.send('Welcome to the Paper API');
});

app.post('/papers', upload.single('file'), async (req, res) => {
  const paperType = req.body.papertype;
  const paperPdf = req.file ? req.file.filename : null;

  try{
      await paperSchema.create({papertype: paperType});
      res.send({status: "success"});
    }catch(error){
        res.json({ status: error})
    }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
