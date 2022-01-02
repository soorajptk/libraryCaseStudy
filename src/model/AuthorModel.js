const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://soorajptk:Soorajptk%40upaobca011@nodeexpressprojects.v3g28.mongodb.net/LibraryApp-1997?retryWrites=true&w=majority',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false,//part#2 point9
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;