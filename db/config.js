const mongoose = require("mongoose");

const dbConnection = async() => {
    try {

        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('BD Success')

    }catch(error) {
        console.log(error);
        throw new Error('Erro ao conectar ao banco');
    }
}

module.exports = {
    dbConnection
}