const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mongoosePaginate = require('mongoose-paginate-v2');

const newsSchema = new Schema({
    link: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    contentTopic: {
        type: String
    }
}, { timestamps: true })

newsSchema.plugin(mongoosePaginate);

const News = mongoose.model('News', newsSchema);
module.exports = News