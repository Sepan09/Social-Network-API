const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            Unique: true,
            Required: true,
            Trimmed: true,
        },
        email: {
            type:String,
            Required: true,
            Unique: true,
            validate: {
                validator: function(v) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
                },
                message: 'Please enter a valid email'
            },
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function() {
    return `friends: ${this.friends.length}`; 
});

const User = model('User', userSchema);

module.exports = User;