/**
 * Created by Alexander Llacho
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { constantsMongo } from '../../commons/constants/constantsMongo';

export type TeamDocument = HydratedDocument<Team>;

@Schema({
  collection: constantsMongo.TEAM,
  validateBeforeSave: true,
  versionKey: false,
})
export class Team {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Boolean, default: true })
  enabled: boolean;

  @Prop({ type: Number, required: true })
  created_at: number;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
