import { ISaveTeamRepositoryModel } from '../../models/team-repository.model';

export interface ITeamRepository {
  findAll(): Promise<any>;

  create(newData: ISaveTeamRepositoryModel): Promise<any>;
}
