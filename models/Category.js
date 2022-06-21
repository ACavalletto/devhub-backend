const mongoose = require('mongoose');
//Fetch Category document identified by reference_number
//category = category.findOne({reference_number: number})

//Fetch all Content linked to this Category
//category_content = category.find({_id: {$in: category.content} }).toArray();

const CategorySchema = new mongoose.Schema({
    _id: String,
    //User ID + modifier passed into schema from restful route
    title: String,
    reference_number: Number,
    //Used to index the category in the database so that we can .find({reference_number: number})
    content: [String]
    //array of refrences to Content documents using ObjectID of individual contents to map to array. 
    //Push new IDs to array on create route of Content documents
})
const Category = mongoose.model('Category', CategorySchema)
module.exports = Category;


// const auth = getAuth();
// const user = auth.currentUser;
// if (user !== null) {
// May not utilzie Global variable....figuring out later
// Path display name into restful route (create/update/read)
//     const displayName = user.displayName;
//     const email = user.email;
//     const photoURL = user.photoURL;
//     const emailVerified = user.emailVerified;

//     const uid = user.uid;
// }