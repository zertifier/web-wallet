import { Component } from '@angular/core';
import {ThemeService} from "./services/theme/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-wallet';
  constructor(themeService: ThemeService) {
  }
}
