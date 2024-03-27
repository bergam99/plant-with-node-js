import { Router } from "express";
import PlantController from "../controllers/PlantControllers";

const plantRouter = Router();
const plantController = new PlantController();

// get all plants    =>  /api/plants
plantRouter.get("/", (req, res) => {
  console.log("plantRouter");

  plantController.getAll(req, res);
});

// get plant by id    =>   /api/plants/:id
plantRouter.get("/:id", (req, res) => {
  console.log("plantRouter");
  plantController.getById(req, res);
});

// create plant    =>  /api/plants
plantRouter.post("/", (req, res) => {
  console.log("plantRouter");
  plantController.create(req, res);
});

// update plant /api/plants/952435
plantRouter.put("/:id", (req, res) => {
  console.log("plantRouter");
  plantController.update(req, res);
});

plantRouter.delete("/:id", (req, res) => {
  console.log("plantRouter");
  plantController.delete(req, res);
});
export default plantRouter;

// appelle controller
// appelé par index
