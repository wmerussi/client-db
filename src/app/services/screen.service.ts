import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScreenSize } from '../type/screen-size.type';

@Injectable({ providedIn: 'root' })
export class ScreenService {
  public resize = new BehaviorSubject<ScreenSize>('mobile');
  public size = this.resize.asObservable();
}
