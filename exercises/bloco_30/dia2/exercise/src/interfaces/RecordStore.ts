import { z } from 'zod';

const RecordSchema = z.object({
  artist: z.string(),
  title: z.string(),
  format: z.string(),
  yearPublished: z.number(),
  new: z.boolean(),
});

type RecordStore = z.infer<typeof RecordSchema>;

export default RecordStore;
export { RecordSchema };