const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            Type: String,
            Required: true,
            maxLength: 280,
        },
        username: {
            Type: String,
            Required: true,
        },
        createdAt: {
            Type: Date,
            default: Date.now,

        },
    },
    {
        toJSON: {
            getters: true,
        },
        id:false,
    }
);



module.exports = reactionSchema;