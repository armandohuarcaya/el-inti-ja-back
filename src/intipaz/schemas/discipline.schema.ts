/**
 * Created by Alexander Llacho
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { constantsMongo } from '../../commons/constants/constantsMongo';

export type DisciplineDocument = HydratedDocument<Discipline>;

@Schema({
  collection: constantsMongo.DISCIPLINE,
  validateBeforeSave: true,
  versionKey: false,
})
export class Discipline {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Boolean, default: true })
  enabled: boolean;

  @Prop({ type: Number, required: true })
  created_at: number;
}

export const DisciplineSchema = SchemaFactory.createForClass(Discipline);
