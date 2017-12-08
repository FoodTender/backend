const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
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

userSchema.methods.asData = function () {
    return {
        id: this._id,
        username: this.username,
        email: this.email
    };
};

module.exports = mongoose.model('User', userSchema);
