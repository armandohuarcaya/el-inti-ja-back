/**
 * Created by Alexander Llacho
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types, SchemaTypes } from 'mongoose';
import { constantsMongo } from '../../commons/constants/constantsMongo';

export type FixtureDocument = HydratedDocument<Fixture>;

@Schema({
  collection: constantsMongo.FIXTURE,
  validateBeforeSave: true,
  versionKey: false,
})
export class Fixture {
  @Prop({ type: SchemaTypes.ObjectId, required: true })
  category_id: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, required: true })
  discipline_id: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, required: true })
  group_id: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, required: true })
  team_id: Types.ObjectId;
}

export const FixtureSchema = SchemaFactory.createForClass(Fixture);
