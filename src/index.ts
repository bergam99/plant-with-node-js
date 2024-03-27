import express from "express";
import cors from "cors";
import AppDataSource from "./data-source";
import plantRouter from "./routes/PlantRoutes";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json()); // autorise renvoyer json en reponse à nos routes.

  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

  app.use("/api/plants", plantRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
