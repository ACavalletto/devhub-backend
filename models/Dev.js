// just displaying the schema
// when you instantiate the "new"  you can add an additional object like timestamp
const devSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
}, {timestamp: true});
//timestamp will actually provide a date time objects or timestamps for both the created app time and the updated.

const Dev = mongoose.model("Dev", devSchema);

module.exports = Dev;