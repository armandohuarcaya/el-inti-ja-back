import { IGenericResponse } from '../../../commons/utils/general';
import { CreateIntipazDto } from "../../infrastructure/dto/create-intipaz.dto";

/**
 * Created by Alexander Llacho
 */
export interface IIntipazService {
  findAllTeam(): Promise<IGenericResponse<any>>;

  create(data: CreateIntipazDto): Promise<IGenericResponse<any>>;
}
