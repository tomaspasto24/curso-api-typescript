import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";

    const passHash = await encrypt(password);
    const newUser = await UserModel.create({
        email,
        password: passHash,
        name
    });
    const token = await generateToken(newUser.email);
    return {
        token,
        user: newUser,
    };
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECT"
    // Si el password es incorrecto retorna el string avisando de esto, en cambio si es correcto: retorna el usuario.
    const token = await generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    }
    return data;
}

export { registerNewUser, loginUser };

