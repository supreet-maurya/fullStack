
import User from "../model/user-schema.js";

export const userSignUp = async ( request , response ) =>{
    try{
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        
        response.status(200).json({message:user});

    }catch(error){
        response.status(500).json({message:error.message})
    }
}

export const userLogin = async ( request , response ) => {
    try {
        const emailPhone = request.body.emailPhone;
        const password = request.body.password;

        let user = await User.findOne({email:emailPhone , password:password});

        if( !user ) {
            user = await User.findOne({phone:emailPhone , password:password});
        }
        
        if( user ) {
            return response.status(200).json({data : user , status: 200 });
        } 
        else {
            return response.status(401).json({data:'User not found' , status : 401});
        }

    } catch(error){
        
        return response.status(500).json({data : `Error ${error.message}` , status: 500} );
    }

}