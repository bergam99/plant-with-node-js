import { Request, Response } from "express";
import PlantService from "../services/PlantServices";

class PlantController {
  private plantService = new PlantService(); // instance

  async getAll(req: Request, res: Response) {
    try {
      console.log("PlantController");
      const plants = await this.plantService.getAll();
      res.send({ status: "ok", data: plants });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async getById(req: Request, res: Response) {
    console.log("PlantController");
    try {
      const plants = await this.plantService.getById(Number(req.params.id));
      res.send({ status: "OK", data: plants });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async create(req: Request, res: Response) {
    console.log("PlantController");

    try {
      const plants = await this.plantService.create(req.body);
      res.send({ status: "OK", data: plants });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async update(req: Request, res: Response) {
    console.log("PlantController");

    try {
      const plants = await this.plantService.update(req.params.id, req.body);
      res.send({ status: "OK", data: plants });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async delete(req: Request, res: Response) {
    console.log("PlantController");

    try {
      const plants = await this.plantService.delete(req.params.id);
      res.send({ status: "OK", data: plants });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }
}

export default PlantController;
