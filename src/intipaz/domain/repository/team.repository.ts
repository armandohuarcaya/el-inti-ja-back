import { Injectable } from '@nestjs/common';
import { ITeamRepository } from './interfaces/team.repository.interface';
import { ISaveTeamRepositoryModel } from '../models/team-repository.model';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from '../../schemas/team.schema';
import { Model, Types } from 'mongoose';
import { Church, ChurchDocument } from '../../schemas/church.schema';

@Injectable()
export class TeamRepository implements ITeamRepository {
  constructor(
    @InjectModel(Team.name)
    private teamModel: Model<TeamDocument>,
    @InjectModel(Church.name)
    private churchModel: Model<ChurchDocument>,
  ) {}

  async findAll(): Promise<any> {
    const resultQuery = await this.teamModel
      .find({})
      .select({ _id: 1, name: 1, logo: 1, church_id: 1 });

    const newData: any = [];
    for (const data of resultQuery) {
      const result = await this.churchModel
        .findOne({ _id: (await data).church_id })
        .select({ _id: 1, name: 1 });

      newData.push({
        _id: data._id,
        name: data.name,
        logo: data.logo,
        church_name: result.name,
      });
    }

    return newData;
  }

  async create(newData: ISaveTeamRepositoryModel): Promise<boolean> {
    newData.created_at = new Date();
    newData.church_id = new Types.ObjectId('64f7a8f42baa43fc7b01ecbb');

    await this.teamModel.create(newData);
    return true;
  }
}
