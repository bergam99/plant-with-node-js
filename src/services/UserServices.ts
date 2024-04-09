import bcrypt from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entities/User";
import jwt from "jsonwebtoken";

export class UserService {
  private userRepository = AppDataSource.getRepository(User); // lier ma base de donnees

  async signup(email: string, password: string) {
    console.log("UserService");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      email,
      password: hashedPassword,
    }); // creer object

    return await this.userRepository.save(newUser); //save
  }

  async login(email: string, password: string) {
    console.log("UserServiceLogin");

    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined.");
    }

    // creer token
    // (payload, secret key, option)
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    return token;
  }
}
