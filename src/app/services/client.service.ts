import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ClientInfo } from '../interfaces/client-info.interface';
import { stringToArray } from '../utils/stringToArray';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private url = 'https://demo4231135.mockable.io/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ClientInfo[]> {
    return this.http
      .get(this.url, { responseType: 'text' })
      .pipe(map((res: string) => stringToArray<ClientInfo>(res)));
  }
}
