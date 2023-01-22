import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  get<T>(name: string): T | undefined {
    const stringfiedData = localStorage.getItem(name);

    if (!stringfiedData) {
      return undefined;
    }

    return JSON.parse(stringfiedData) as T;
  }

  set<T>(name: string, data: T) {
    const stringfiedData = JSON.stringify(data);
    localStorage.setItem(name, stringfiedData);
  }
}
