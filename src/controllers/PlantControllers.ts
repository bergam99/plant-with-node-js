import { Request, Response } from "express";
import PlantService from "../services/PlantServices";

class PlantController {
  private plantService = new PlantService(); // instance
  async getAll(req: Request, res: Response) {
    console.log("PlantController");

    const plants = await this.plantService.getAll(); // cette instance
    // appelle service

    res.send({ status: "ok", data: plants });
    // send : envoie la reponse
  }
}
export default PlantController;
