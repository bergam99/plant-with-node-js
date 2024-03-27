import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";

class PlantService {
  private plantRepository = AppDataSource.getRepository(Plant);
  async getAll() {
    console.log("PlantService");
    // return AppDataSource.query("SELECT * FROM plants;");
    return this.plantRepository.find();
  }
}

export default PlantService;
