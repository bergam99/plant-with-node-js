import { Router } from "express";
import PlantController from "../controllers/PlantControllers";
import checkToken from "../middleware/CheckToken";

const plantRouter = Router();
const plantController = new PlantController();

// get all plants    =>  /api/plants
plantRouter.get("/", checkToken, (req, res) => {
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

// update plant /api/plants/:id
plantRouter.put("/:id", (req, res) => {
  console.log("plantRouter");
  plantController.update(req, res);
});

// delete plant /api/plants/:id

plantRouter.delete("/:id", (req, res) => {
  console.log("plantRouter");
  plantController.delete(req, res);
});
export default plantRouter;

// appelle controller
// appelé par index
