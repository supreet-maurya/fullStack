import mongoose from 'mongoose'
// import app from '..';
export const Connection = async (username , password) =>{
    console.log(username , password);
    const URL = `mongodb+srv://${username}:${password}@ecommerce.cr4p9pa.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce`;
    console.log(URL);
    console.log('making connection');
    try {
        console.log('staart');
        mongoose.connect(URL, {
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connected to the database');
            // app.listen(PORT, () => {
            //     console.log(`Server is running on port ${PORT}`);
            // });
        })
        // await mongoose.connect(URL , {useUnifiedTopology : true , useNewUrlParser : true});
        console.log('Database Connected');

    } catch (error){
        console.log('making connection1');
        console.log('Error while connecting with database')
    }
}

export default Connection