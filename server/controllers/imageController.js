import axios from "axios";
import Image from '../models/Image.js';
import { API_KEY } from '../config/config.js';

export const generateImage = async (req, res) => {
    const { promptText, imageType, imageShape, imageSupport, imageBackground, imageStyle, generatedImage } = req.body;

    const prompt = `${promptText} image type: ${imageType}, image shape: ${imageShape}, image support ${imageSupport}, image background ${imageBackground}, image style: ${imageStyle}, generated image: ${generatedImage}`;

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
        const newImage = new Image({ prompt, url: imageUrl });
        await newImage.save();

        console.log(`Generated image URL: ${imageUrl}`);
        res.json({ imageUrl });
    } catch (error) {
        console.error('Error generating image:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate image' });
    }
};