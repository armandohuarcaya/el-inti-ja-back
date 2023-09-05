import { Module } from '@nestjs/common';
import { IntipazService } from './application/intipaz.service';
import { IntipazController } from './intipaz.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './schemas/group.schema';
import { Team, TeamSchema } from './schemas/team.schema';
import { Category, CategorySchema } from './schemas/category.schema';
import { Church, ChurchSchema } from './schemas/church.schema';
import { Discipline, DisciplineSchema } from './schemas/discipline.schema';
import { Fixture, FixtureSchema } from './schemas/fixture.schema';
import { TeamRepository } from './domain/repository/team.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Group.name, schema: GroupSchema },
      { name: Team.name, schema: TeamSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Church.name, schema: ChurchSchema },
      { name: Discipline.name, schema: DisciplineSchema },
      { name: Fixture.name, schema: FixtureSchema },
    ]),
  ],
  controllers: [IntipazController],
  providers: [IntipazService, TeamRepository],
})
export class IntipazModule {}
