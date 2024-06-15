import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    prompt: String,
    response: String,
    audioURL: String
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;