import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    prompt: String,
    url: String
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
