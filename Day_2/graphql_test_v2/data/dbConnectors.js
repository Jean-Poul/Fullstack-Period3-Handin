/* import mongoose, { mongo } from 'mongoose';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); */
/* import mongoose from 'mongoose'
// const CONNECTION = process.env.CONNECTION
const CONNECTION = 'mongodb+srv://admin:Mongo0110@cluster0.f4tmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONNECTION, {
    useUnifiedTopology:true,
    useNewURLParser:true
}) */
import mongoose, { mongo } from 'mongoose'
import path from "path"
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
const CONNECTION = process.env.CONNECTION
mongoose.connect(CONNECTION, {
     useUnifiedTopology: true,
      useNewURLParser: true 
    })

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
});

const Friends = mongoose.model('friends', friendSchema);

export { Friends };
