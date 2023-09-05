/**
 * Created by Alexander Llacho
 */

export interface IGenericResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  token?: string;
  createdAt?: number;
  errors?: any[];
  error?: object;
}

export interface IPaginatedRequest<T> {
  filter?: T;
  lastKey: string;
  page: number;
  size: number;
  source?: Array<any>;
  order?: { field: string; type: string };
}
//con 2 campos: sortBy (campo), sortOrder (ASC o DESC)
export interface IPaginatedResponse<T> {
  success: boolean;
  items?: Array<T>;
  total: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  lastKey: string;
}

export class IError {
  code?: string;
  message?: string;
}
