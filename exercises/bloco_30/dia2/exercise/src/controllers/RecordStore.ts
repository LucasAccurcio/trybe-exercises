  // src/Controllers/Frame.ts

  import { Request, Response } from 'express';
  import Controller, { RequestWithBody, ResponseError } from '.';
  import RecordStoreService from '../services/RecordStore';
  import RecordStore from '../interfaces/RecordStore';

  class RecordStoreController extends Controller<RecordStore> {
    private _route: string;

    constructor(
      service = new RecordStoreService(),
      route = '/frames',
    ) {
      super(service);
      this._route = route;
    }

    get route() { return this._route; }

    create = async (
      req: RequestWithBody<RecordStore>,
      res: Response<RecordStore | ResponseError>,
    ): Promise<typeof res> => {
      const { body } = req;
      try {
        const frame = await this.service.create(body);
        if (!frame) {
          return res.status(500).json({ error: this.errors.internal });
        }
        if ('error' in frame) {
          return res.status(400).json(frame);
        }
        return res.status(201).json(frame);
      } catch (err) {
        return res.status(500).json({ error: this.errors.internal });
      }
    };

    readOne = async (
      req: Request<{ id: string }>,
      res: Response<RecordStore | ResponseError>,
    ): Promise<typeof res> => {
      const { id } = req.params;
      try {
        const frame = await this.service.readOne(id);
        return frame
          ? res.json(frame)
          : res.status(404).json({ error: this.errors.notFound });
      } catch (error) {
        return res.status(500).json({ error: this.errors.internal });
      }
    };

    update = async (
      req: RequestWithBody<RecordStore> | Request<{ id: string; }>,
      res: Response<RecordStore | ResponseError>,
    ): Promise<typeof res> => {
      const { id } = req.params;
      const { body } = req;
      try {
        const frame = await this.service.update(id, body);
        return frame
          ? res.json(frame)
          : res.status(404).json({ error: this.errors.notFound });
      } catch (error) {
        return res.status(500).json({ error: this.errors.internal });
      }
    };

    delete = async (
      req: Request<{ id: string }>,
      res: Response<RecordStore | ResponseError>,
    ): Promise<typeof res> => {
      const { id } = req.params;
      try {
        const frame = await this.service.delete(id);
        return frame
          ? res.json(frame)
          : res.status(404).json({ error: this.errors.notFound });
      } catch (error) {
        return res.status(500).json({ error: this.errors.internal });
      }
    };
  }

  export default RecordStoreController;