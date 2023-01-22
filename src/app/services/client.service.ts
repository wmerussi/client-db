import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';

import { ClientInfo } from '../interfaces/client-info.interface';
import { stringToArray } from '../utils/stringToArray';
import { DatabaseService } from './database.service';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private url = 'https://demo4231135.mockable.io/';

  constructor(private database: DatabaseService, private http: HttpClient) {}

  getAll(): Observable<ClientInfo[]> {
    const storedClients = this.database.get<ClientInfo[]>('clientsInfo');

    if (!!storedClients) {
      return of(storedClients);
    }

    return this.http.get(this.url, { responseType: 'text' }).pipe(
      map((res: string) => stringToArray<ClientInfo>(res)),
      tap((clientsInfo: ClientInfo[]) =>
        this.database.set('clientsInfo', clientsInfo)
      )
    );
  }
}
