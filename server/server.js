import express from 'express';
import { API_KEY } from './config.js';
import OpenAI from 'openai';
import multer from 'multer';
import mongoose from 'mongoose';
import axios from "axios";

const openai = new OpenAI({
    apiKey: API_KEY,
});

const app = express();
const port = 3001;

// Configure CORS support
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Init multer to handle form data
const upload = multer();

// Connect to MongoDB
const mongoUri = 'mongodb+srv://usermiagegpt:MDYqRLeDiVvWYo4c@miagegpt.eryt9d1.mongodb.net/gpt?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for storing chats
const chatSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    prompt: String,
    response: String
});

const Chat = mongoose.model('Chat', chatSchema);

const imageSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    prompt: String,
    url: String
});

const Image = mongoose.model('Image', imageSchema);

// Handle POST request to /image and use multer to handle form data
app.post('/image', upload.none(), async (req, res) => {
    const promptText= req.body.promptText;
    const imageType= req.body.imageType;
    const imageShape= req.body.imageShape;
    const imageSupport= req.body.imageSupport;
    const imageBackground= req.body.imageBackground;
    const imageStyle= req.body.imageStyle;
    const generatedImage= req.body.imageStyle;

    const prompt = `${promptText} image type: ${imageType}, image shape: ${imageShape}, image support ${imageSupport}, image background ${imageBackground},image style: ${imageStyle}, generated image:  ${generatedImage}`;


    console.log(req.body.prompt)

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations',
            {
                prompt: prompt,
                n: 1,
                size: '1024x1024'
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const imageUrl = response.data.data[0].url;

        // Save the generated image URL to MongoDB
        const newImage = new Image({ prompt: prompt, url: imageUrl });
        await newImage.save();

        console.log(`Generated image URL: ${imageUrl}`);
        res.json({ imageUrl });
    } catch (error) {
        console.error('Error generating image:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate image' });
    }

});

// Handle POST request to /chat and use multer to get the form data
app.post('/chat', upload.none(), async (req, res) => {
    // Get prompt from the form data
    const prompt = req.body.prompt;
    console.log("PROMPT: ", prompt);

    // Send the prompt to the OpenAI API
    try {
        const apiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature: 1,
            max_tokens: 7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        // Create a new chat document
        const newChat = new Chat({
            prompt: prompt,
            response: apiResponse.choices[0].message.content
        });

        // Save the chat to MongoDB
        await newChat.save();

        // Send the response as JSON
        res.json(apiResponse);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch data from OpenAI' });
    }
});

// Handle GET request to /chats to retrieve all chat documents
app.get('/chats', async (req, res) => {
    try {
        const chats = await Chat.find().sort({ date: -1 });
        res.json(chats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to retrieve chats' });
    }
});

// Start server and listen to port 3001
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
