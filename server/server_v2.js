import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import chatRoutes from './routes/chatRoutes.js';
import audioRoutes from './routes/audioRoutes.js';
import './config/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(multer().none());
app.use('/chat', chatRoutes);
app.use('/audio', audioRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
