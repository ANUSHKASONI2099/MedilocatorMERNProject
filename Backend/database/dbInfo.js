import mongoose from "mongoose"

const DBURL = `mongodb+srv://Anushkamern:Anushkamern89@mycluster.8cu1eya.mongodb.net/projectdb`

export const dbConnect = async()=>{
    try{
       const connection = await mongoose.connect(DBURL)
       console.log(`database connection established successfully`);
       



    }

    catch(error){

        console.log(error);
        
    }
}


