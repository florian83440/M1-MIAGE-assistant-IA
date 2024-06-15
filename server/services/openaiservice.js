import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

export const generateChatResponse = async (prompt) => {
    return await openai.chat.completions.create({
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
    return await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: prompt,
    });
};

export const generateImageResponse = async (prompt) => {
    return await openai.images.generations.create({
        prompt: prompt,
        n: 1,
        size: '1024x1024'
    });
};
