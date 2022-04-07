// models/MovieModel.ts

import { model as createModel } from 'mongoose';
import { MovieSchema, IMovie } from '../schemas/MovieSchema';

class MovieModel {
  /*
    Criamos no construtor um model do Mongoose do tipo IMovie, passando pro createModel(model do Mongoose) um nome e o schema de referência.
  */

  constructor(private movieModel = createModel<IMovie>('movies', MovieSchema)) {} 

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.find();
    return movies;
  }
}

export default MovieModel;