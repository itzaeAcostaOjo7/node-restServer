//PUERTO
process.env.PORT = process.env.PORT || 3000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//VENCIMIENTO DEL TOKEN 
// 60 Segundos 60 Minutos 24 Horas 30 Días
process.env.CADUCIDAD_Token = 60 * 60 * 24 * 30;

//SEED DE AUTENTICACIÓN
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

//BASE DE DATOS
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//GOOGLE CLIENT_ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '717971404259-6jhvpih6vrh248gh3tkb9dj7t9dqqf1j.apps.googleusercontent.com';