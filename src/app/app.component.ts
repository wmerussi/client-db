import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenService } from './services/screen.service';
import { ScreenSize } from './types/screen-size.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private screenService: ScreenService) {}

  ngOnInit() {
    this.onWindowResize();
  }

  @HostListener('window:resize', [])
  private onWindowResize() {
    const width = window.innerWidth;
    const size: ScreenSize =
      width < 768 ? 'mobile' : width < 1025 ? 'tablet' : 'desktop';

    this.screenService.resize.next(size);
  }
}
