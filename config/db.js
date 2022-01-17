import mongoose from 'mongoose';

const connectDB = (req, res) => {
   

    mongoose.connect(process.env.MONGO_URL, {}, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        console.log(`Aplicatia s-a connectat la baza de date`)
    })
}


export default connectDB;
