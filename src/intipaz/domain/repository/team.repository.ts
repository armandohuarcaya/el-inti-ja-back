import { Injectable } from '@nestjs/common';
import { ITeamRepository } from './interfaces/team.repository.interface';
import { ISaveTeamRepositoryModel } from '../models/team-repository.model';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from '../../schemas/team.schema';
import { Model } from 'mongoose';

@Injectable()
export class TeamRepository implements ITeamRepository {
  constructor(
    @InjectModel(Team.name)
    private teamModel: Model<TeamDocument>,
  ) {}

  async findAll(): Promise<any> {
    return this.teamModel.find({});
  }

  async create(newData: ISaveTeamRepositoryModel): Promise<boolean> {
    newData.created_at = new Date();

    await this.teamModel.create(newData);
    return true;
  }
}
