const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Pasan_Baddewithana:lonewolf12049@mernapp.dj9idyb.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
