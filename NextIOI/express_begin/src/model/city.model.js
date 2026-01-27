const {mongoose} = require('mongoose');

let citySchema = new mongoose.Schema(
    {
        city_name : {type: String, required: true},
        city_state : {type: String, required: true},
        city_country : {type: String, required: true},
        city_zip : {type: String, required: true},
    }, {timestamps: true}
)


let City = mongoose.model("City", citySchema);
module.exports = City;