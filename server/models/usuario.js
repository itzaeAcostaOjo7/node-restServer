const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let rolesValidos = {
    values: ['admin_role', 'user_role'],
    message: '{Value} no es un rol válido.'
}
let Schema = mongoose.Schema;
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El e-Mail es requerido.']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio.']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'user_role',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único.' });
module.exports = mongoose.model('Usuario', usuarioSchema);