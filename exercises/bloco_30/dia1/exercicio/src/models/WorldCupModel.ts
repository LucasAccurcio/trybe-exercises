import { model as createModel } from 'mongoose';
import { WorldCupsSchema, IWorldCups } from '../schemas/WorldCupSchema';

class WorldCupModel {
  constructor(private worldCupModel = createModel<IWorldCups>('tournaments', WorldCupsSchema)) {} 

  public async getAll(): Promise<IWorldCups[]> {
    const worldcups = await this.worldCupModel.find();
    return worldcups;
  }

  public async getWorldCupByYear(
    year: number,
  ): Promise<IWorldCups[] | undefined> {
    const worldCup = await this.worldCupModel.find({ year });
    return worldCup;
  }

  public async create(worldCupData: object): Promise<IWorldCups> {
    const worldcup = await this.worldCupModel.create(worldCupData);
    return worldcup;
  }

  public async getOne(id: string): Promise<IWorldCups | null> {
    const worldcup = await this.worldCupModel.findOne({ _id: id });
    return worldcup;
  }

  public async update(id: string, worldCupData: object): Promise<IWorldCups | null> {
    const worldcup = await this.worldCupModel.findOneAndUpdate(
      { _id: id },
      { ...worldCupData },
      { new: true }, // retorna os dados atualizados, com false retorna os dados antigos.
    );
    return worldcup;
  }

  public async delete(id: string): Promise<IWorldCups | null> {
    const worldcup = await this.worldCupModel.findOneAndDelete({ _id: id });
    return worldcup;
  }
}

export default WorldCupModel;