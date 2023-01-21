import { Status } from '../type/status.type';

export interface ClientInfo {
  id?: number;
  name: string;
  cnpj: string;
  status: Status;
}
