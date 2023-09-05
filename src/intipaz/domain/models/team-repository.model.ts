import { Types } from 'mongoose';

export interface ITeamRepositoryModel {
  _id?: Types.ObjectId;
  name?: string;
  enabled?: boolean;
  created_at?: Date;
}

export type ISaveTeamRepositoryModel = Omit<ITeamRepositoryModel, '_id'>;
