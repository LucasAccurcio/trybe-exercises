  // src/services/BookService.ts

  import WorldCupModel from '../models/WorldCupModel';
  import { IWorldCups } from '../schemas/WorldCupSchema'

  class BookService {
    constructor(private worldCup = new WorldCupModel()) {} 

    public async getAll(): Promise<IWorldCups[]> {
      const worldcups = await this.worldCup.getAll();
      return worldcups;
    }

    public async getWorldCupByYear(
      year: number,
    ): Promise<IWorldCups[] | undefined> {
      const worldCup = await this.worldCup.getWorldCupByYear(year);
      return worldCup;
    }

    public async create(worldCupData: object): Promise<IWorldCups> {
      const worldcup = await this.worldCup.create(worldCupData);
      return worldcup;
    }

    public async getOne(id: string): Promise<IWorldCups | null> {
      const data = await this.worldCup.getOne(id);
      return data;
    }

    public async update(id: string, worldCupData: object): Promise<IWorldCups | null> {
      const data = await this.worldCup.update(id, worldCupData);
      return data;
    }

    public async delete(id: string): Promise<IWorldCups | null> {
      const data = await this.worldCup.delete(id);
      return data;
    }
  }

  export default BookService;