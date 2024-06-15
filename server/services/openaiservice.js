import OpenAI from 'openai';
import { API_KEY } from '../config/config.js';

const openai = new OpenAI({
    apiKey: API_KEY,
});

export const generateChatResponse = async (prompt) => {
    return openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "assistant",
                "content": prompt
            }
        ],
        max_tokens: 10
    });
};

export const generateAudioResponse = async (prompt) => {
    return openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: prompt,
    });
};
