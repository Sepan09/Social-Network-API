const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')


const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            Required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,

        },
        username: {
            type: String,
            Required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }, 
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return `reactions: ${this.reactions.length}`;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;