import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";

class PlantService {
  private plantRepository = AppDataSource.getRepository(Plant);
  async getAll() {
    console.log("PlantService");
    // return AppDataSource.query("SELECT * FROM plants;");
    return this.plantRepository.find();
  }

  async getById(id: number) {
    console.log("PlantService");
    // return AppDataSource.query(`SELECT * FROM book WHERE id = ${id};`);
    return this.plantRepository.findOneBy({ id: id });
  }

  async create(plant: Plant) {
    console.log("PlantService");
    // return AppDataSource.query(
    //   `INSERT INTO book (title) VALUES ('${book.title}');`
    // );
    const newBook = this.plantRepository.create(plant);
    return this.plantRepository.save(newBook);
  }
  async update(id: string, plant: Plant) {
    console.log("PlantService");
    // return AppDataSource.query(
    //   `UPDATE book SET title = '${book.title}' WHERE id = ${id};`
    // );
    return this.plantRepository.update(id, plant);
  }

  async delete(id: string) {
    console.log("PlantService");
    // return AppDataSource.query(`DELETE FROM book WHERE id = ${id};`);
    return this.plantRepository.delete(id);
  }
}

export default PlantService;

// Je dois pouvoir récupérer toutes les plantes de la base de données. ok
// Je dois pouvoir récupérer une plante de la base de données en fonction de son id. ok
// Je dois pouvoir ajouter une plante dans la base de données.
// Je dois pouvoir modifier une plante dans la base de données.
// Je dois pouvoir supprimer une plante de la base de données.
// Je dois pouvoir inscrire un utilisateur dans la base de données.
// Je dois pouvoir authentifier un utilisateur de la base de données.
// ​
