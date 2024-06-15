import { readFileAsync } from '../utils/readFileAsync.js';
import Chat from '../models/Chat.js';
import { generateChatResponse } from '../services/openaiService.js';
import path from 'path';

const filePath = path.resolve('../data/website.json');

export const createChat = async (req, res) => {
    const prompt = req.body.prompt;
    console.log("PROMPT: ", prompt);

    try {
        const fileContent = await readFileAsync(filePath, 'utf8');
        const combinedPrompt = `En t'aidant des données suivantes:\n${fileContent}\n\n${prompt}`;

        const apiResponse = await generateChatResponse(combinedPrompt);
        const newChat = new Chat({
            prompt,
            response: apiResponse.choices[0].message.content
        });

        await newChat.save();
        res.json(apiResponse);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch data from OpenAI' });
    }
};

export const getChats = async (req, res) => {
    try {
        const chats = await Chat.find({ audioURL: { $exists: false } }).sort({ date: 1 });
        res.json(chats);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to retrieve chats' });
    }
};
