import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { ScreenSize } from 'src/app/type/screen-size.type';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public screenSize = this.screenService.size;
  public isMobile: boolean = false;

  constructor(private screenService: ScreenService) {}

  ngOnInit() {
    this.screenSize.subscribe((screenSize: ScreenSize) => {
      this.isMobile = screenSize === 'mobile';
    });
  }
}
