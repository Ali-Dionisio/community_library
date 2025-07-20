import userRepository from "../repositories/user.repositories.js";
import bcrypet from "bcrypt";


async function createUserService(newUser){
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email);
    if(foundUser) throw new Error("User already exists!");
    
    const passHash = await bcrypet.hash(newUser.password, 10);
    const user = await userRepository.createUserRepository({
        ...newUser,
        password: passHash,
    });
    if(!user) throw new Error("Error creating User");
    return user;
}

export default {
    createUserService
}