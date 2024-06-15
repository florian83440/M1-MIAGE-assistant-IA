import Chat from '../models/Chat.js';
import { generateAudioResponse } from '../services/openaiService.js';
import path from 'path';
import fs from 'node:fs';

export const createAudio = async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Text is required' });
    }

    try {
        const mp3 = await generateAudioResponse(prompt);
        const date = new Date();
        const formattedDate = date.toISOString().replace(/[:.]/g, '-');
        const fileName = `speech_${formattedDate}.mp3`;
        const speechFile = path.resolve(`../data/${fileName}`);
        const buffer = Buffer.from(await mp3.arrayBuffer());
        await fs.promises.writeFile(speechFile, buffer);

        const newChat = new Chat({
            prompt,
            response: 'Audio generated',
            audioURL: fileName
        });

        await newChat.save();
        res.json({ message: 'Audio file created successfully', filePath: speechFile });
    } catch (error) {
        console.error('Error generating audio:', error);
        res.status(500).json({ error: 'Failed to generate audio' });
    }
};

export const getAudios = async (req, res) => {
    try {
        const audios = await Chat.find({ audioURL: { $exists: true } }).sort({ date: 1 });
        res.json(audios);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to retrieve audios' });
    }
};
