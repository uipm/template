import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-users-by-country',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './users-by-country.component.html',
    styleUrl: './users-by-country.component.scss'
})
export class UsersByCountryComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}