import { Status } from '../enums/status.enum';

export interface ClientInfo {
  id?: number;
  name: string;
  cnpj: string;
  status: Status;
}
