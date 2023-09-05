import { Inject, Injectable } from "@nestjs/common";
import { IIntipazService } from "./interfaces/intipaz.service.interface";
import { IGenericResponse } from "../../commons/utils/general";
import { CreateIntipazDto } from "../infrastructure/dto/create-intipaz.dto";
import { TeamRepository } from "../domain/repository/team.repository";
import { ITeamRepository } from "../domain/repository/interfaces/team.repository.interface";

@Injectable()
export class IntipazService implements IIntipazService {
  constructor(
    @Inject(TeamRepository)
    private readonly iTeamRepository: ITeamRepository,
  ) {}

  async findAllTeam(): Promise<IGenericResponse<any>> {
    const response: IGenericResponse<any> = {
      success: true,
    };

    response.data = await this.iTeamRepository.findAll();

    return response;
  }

  async create(data: CreateIntipazDto): Promise<IGenericResponse<any>> {
    const response: IGenericResponse<any> = {
      success: false,
    };

    if (await this.iTeamRepository.create(data)) {
      response.success = true;
      response.message = 'Usuario registrado exitosamente';
    }

    return response;
  }
}
