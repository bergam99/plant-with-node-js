import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("plants")
export class Plant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, name: "nom" })
  name!: string;

  @Column({ type: "varchar", length: 255, name: "soleil" })
  sunlight!: string;

  @Column({ type: "int", name: "arrosage" })
  watering!: number;

  @Column({ type: "varchar", length: 255, name: "categorie" })
  category!: string;

  @Column({ type: "varchar", length: 255, name: "image" })
  image!: string;
}
