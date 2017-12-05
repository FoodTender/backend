const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    bookmarks: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }
    ],
    prof_pic: String,
    ingredients_user: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }
    ]
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

module.exports = mongoose.model('User', userSchema);
