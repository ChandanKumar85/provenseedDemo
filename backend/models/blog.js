const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mongoosePaginate = require('mongoose-paginate-v2');

const blogpostSchema = new Schema({
    cropId: {
        type: String
    },
    insightsTypeId: {
        type: String
    },
    cropIcon: {
        type: String
    },
    adviceText: {
        type: String
    },
    ImagePath: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    pagePath: {
        type: String
    }
}, { timestamps: true })

blogpostSchema.plugin(mongoosePaginate);

const Blogpost = mongoose.model('Blogpost', blogpostSchema);
module.exports = Blogpost