const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,

    warehouse: {
        type: Number,
        required: true,
        default: 111111
    },

    sku: {
        type: Number,
        required: true,
        unique: true,
    },

    stock: {
        type: Number,
        default:0
    },
});

module.exports = mongoose.model('PostMessage', postSchema);

// export default PostMessage;