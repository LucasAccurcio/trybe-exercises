import { Schema } from 'mongoose';

export interface IWorldCups{
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionGoals?: number;
  editionStrikers: Array<string>,
  bestPlayer: string;
  bestGoalkeeper?: string;
  bestYoungPlayer: string;
}

export const WorldCupsSchema = new Schema<IWorldCups>({
  year: { type: Number, required: true },
  hostCountry: { type: String},
  champions: { type: String},
  runnerUp: { type: String},
  editionGoals: { type: Number },
  editionStrikers: { type: [{ type: String }]},
  bestPlayer: { type: String},
  bestGoalkeeper: { type: String },
  bestYoungPlayer: { type: String},
},
{ 
  versionKey: false 
});