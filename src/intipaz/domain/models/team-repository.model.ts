import { Types } from 'mongoose';

export interface ITeamRepositoryModel {
  _id?: Types.ObjectId;
  church_id?: Types.ObjectId;
  name?: string;
  logo?: string;
  enabled?: boolean;
  created_at?: Date;
}

export type ISaveTeamRepositoryModel = Omit<ITeamRepositoryModel, '_id'>;
