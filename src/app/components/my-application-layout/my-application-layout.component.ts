import { Component } from '@angular/core';
import { SessionStateService } from '@abp/ng.core';
import { MyRoutesComponent } from '../my-routes/my-routes.component';
import { RouterOutlet } from '@angular/router';
import { BaseThemeBasicModule } from '@abp/ng.theme.basic';

@Component({
  selector: 'app-my-application-layout',
  standalone: true,
  imports: [
    MyRoutesComponent,
    RouterOutlet,
    BaseThemeBasicModule
  ],
  templateUrl: './my-application-layout.component.html',
  styleUrl: './my-application-layout.component.scss'
})
export class MyApplicationLayoutComponent {
  constructor(
    private sessionStateService: SessionStateService,
  ) {
    this.sessionStateService.setLanguage("en")
  }
}
