/**
 * Created by Alexander Llacho
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { constantsMongo } from '../../commons/constants/constantsMongo';

export type ChurchDocument = HydratedDocument<Church>;

@Schema({
  collection: constantsMongo.CHURCH,
  validateBeforeSave: true,
  versionKey: false,
})
export class Church {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Boolean, default: true })
  enabled: boolean;

  @Prop({ type: Number, required: true })
  created_at: number;
}

export const ChurchSchema = SchemaFactory.createForClass(Church);
