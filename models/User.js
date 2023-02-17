const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_schema = new Schema({
    address: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    coin: {
        type: Array
        /**
         * token: {type: String, required: true},
         * amount: {type: Number, required: true},
         * face: {type: Boolean, required: true},
         * result: {type: Boolean, required: true},
         * date: {type: Date, required: true}
         */
    }
})

module.exports = mongoose.model("users", user_schema);