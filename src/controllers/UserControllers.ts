import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

export class UserController {
  // instancier (créer propriete qui instancie UserService)
  private userService = new UserService();

  async signup(req: Request, res: Response) {
    console.log("UserRouter");
    const { email, password } = req.body;
    const createUser = await this.userService.signup(email, password); // referencier => this

    if (createUser) {
      res.status(201).json({ message: "User created" });
    } else {
      res.status(500).json({ message: "Creating user failed..!!" });
    }
  }
  async login(req: Request, res: Response) {
    console.log("UserRouterLogin");
    const { email, password } = req.body;
    const token = await this.userService.login(email, password);

    if (token) {
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  }
}
