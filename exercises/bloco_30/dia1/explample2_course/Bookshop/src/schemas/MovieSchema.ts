// /src/schemas/MovieSchema.ts

import { Schema } from 'mongoose';

export interface IMovie {
  title: string;
  releaseYear: string;
}

/*
  Uma vez que implementamos a interface Movie,
  colocamos ela entre <>, para definir o tipo
  do Schema.
*/

export const MovieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  releaseYear: { type: String, required: false }
});