const Email = require('../models/email.js')
const isBlocked =async (email)=>{
    Email.find({email:email}).then((result)=>{
        // console.log(result)
        return result
    })
}
module.exports = isBlocked