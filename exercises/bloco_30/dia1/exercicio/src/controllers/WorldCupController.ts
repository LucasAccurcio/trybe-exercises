  import { Request, Response } from 'express';
  import WorldCupService from '../services/WorldCupService';

  class WorldCupController {
    constructor(private worldCupService = new WorldCupService()) {}

    notFound = 'World Cup not found';

    internalError = 'Internal server error';

    public getAll = async (req: Request, res: Response): Promise<Response> => {
      try {
        const worldcups = await this.worldCupService.getAll();

        return res.status(200).send(worldcups);
      } catch (err: unknown) {
        return res.status(500).send({ message: this.internalError });
      }
    };

    public getWorldCupByYear = async (req: Request, res: Response): Promise<Response> => {
      const { year } = req.params;
      try {
        const worldCup = await this
          .worldCupService.getWorldCupByYear(Number(year));
        if (worldCup?.length === 0) {
          return res.status(404)
            .send({ error: 'Not found any world cup with this year' });
        }
        return res.status(200).send(worldCup);
      } catch (error) {
        return res.status(500).send(this.internalError);
      }
    };

    public create = async (req: Request, res: Response): Promise<Response> => {
      try {
        console.log('entrou no controller')
        const worldcup = await this.worldCupService.create(req.body);
        return res.status(201).send(worldcup);
      } catch (err: unknown) {
        return res.status(500).send({ message: this.notFound });
      }
    };

    public getOne = async (req: Request, res: Response): Promise<Response> => {
      try {
        const { id } = req.params;
        const worldcup = await this.worldCupService.getOne(id);
        if (worldcup) {
          return res.status(200).send(worldcup);
        }
        return res.status(404).send({ message: this.notFound });
      } catch (err: unknown) {
        return res.status(500).send({ message: this.internalError });
      }
    };

    public update = async (req: Request, res: Response):
    Promise<Response> => {
      try {
        const { id } = req.params;
        const worldcup = await this.worldCupService.update(id, req.body);
        if (worldcup) {
          return res.status(200).send(worldcup);
        }
        return res.status(404).send({ message: this.notFound });
      } catch (err: unknown) {
        return res.status(500).send({ message: this.internalError });
      }
    };

    public delete = async (req: Request, res: Response):
    Promise<Response> => {
      try {
        const { id } = req.params;
        const worldcup = await this.worldCupService.delete(id);
        if (worldcup) {
          return res.status(200).send(worldcup);
        }
        return res.status(404).send({ message: this.notFound });
      } catch (err: unknown) {
        return res.status(500).send({ message: this.internalError });
      }
    };
  }

  export default WorldCupController;