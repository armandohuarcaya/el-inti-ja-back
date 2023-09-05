/**
 * Created by Alexander Llacho
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { constantsMongo } from '../../commons/constants/constantsMongo';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({
  collection: constantsMongo.CATEGORY,
  validateBeforeSave: true,
  versionKey: false,
})
export class Category {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Boolean, default: true })
  enabled: boolean;

  @Prop({ type: Number, required: true })
  created_at: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
