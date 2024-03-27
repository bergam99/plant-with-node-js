import { Router } from "express";
import PlantController from "../controllers/PlantControllers";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req, res) => {
  console.log("plantRouter");

  plantController.getAll(req, res);
});

export default plantRouter;

// appelle controller
// appelé par index
