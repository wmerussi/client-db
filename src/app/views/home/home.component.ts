import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenService } from 'src/app/services/screen.service';
import { ScreenSize } from 'src/app/types/screen-size.type';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public screenSize = this.screenService.size;
  public isMobile: boolean = false;

  constructor(private router: Router, private screenService: ScreenService) {}

  ngOnInit() {
    this.screenSize.subscribe((screenSize: ScreenSize) => {
      this.isMobile = screenSize === 'mobile';
    });
  }

  addNew() {
    this.router.navigate(['/adicionar']);
  }
}
