import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';

import { ClientInfo } from '../interfaces/client-info.interface';
import { stringToArray } from '../utils/stringToArray';
import { DatabaseService } from './database.service';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private readonly databaseName: string = 'clientsInfo';
  private readonly url = 'https://demo4231135.mockable.io/';

  constructor(private database: DatabaseService, private http: HttpClient) {}

  get(id: number): Observable<ClientInfo | undefined> {
    const storedClients = this.database.get<ClientInfo[]>(this.databaseName);

    if (!storedClients) {
      return of(undefined);
    }

    const clientInfo = storedClients.find(
      (client: ClientInfo) => client.id === +id
    );

    return of(clientInfo);
  }

  getAll(): Observable<ClientInfo[]> {
    const storedClients = this.database.get<ClientInfo[]>(this.databaseName);

    if (!!storedClients) {
      return of(storedClients);
    }

    return this.http.get(this.url, { responseType: 'text' }).pipe(
      map((res: string) => stringToArray<ClientInfo>(res)),
      tap((clientsInfo: ClientInfo[]) =>
        this.database.set(this.databaseName, clientsInfo)
      )
    );
  }

  addNewClient(clientInfo: ClientInfo): Observable<undefined> {
    const storedClients =
      this.database.get<ClientInfo[]>(this.databaseName) || [];

    const id = (storedClients[storedClients.length - 1].id || 0) + 1;

    this.database.set<ClientInfo[]>(this.databaseName, [
      ...storedClients,
      {
        ...clientInfo,
        id,
      },
    ]);

    return of(undefined);
  }

  editClient(clientInfo: ClientInfo): Observable<undefined> {
    const storedClients = (
      this.database.get<ClientInfo[]>(this.databaseName) || []
    ).filter((client: ClientInfo) => client.id !== Number(clientInfo?.id));

    const updatedClients = [...storedClients, clientInfo];

    updatedClients.sort((a: ClientInfo, b: ClientInfo) => {
      if (!a.id || !b.id) {
        debugger;
        return 0;
      }

      if (a.id > b.id) {
        return 1;
      }

      if (a.id < b.id) {
        return -1;
      }

      return 0;
    });

    this.database.set<ClientInfo[]>(this.databaseName, updatedClients);

    return of(undefined);
  }
}
