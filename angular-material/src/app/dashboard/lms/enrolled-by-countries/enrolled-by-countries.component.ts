import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-enrolled-by-countries',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './enrolled-by-countries.component.html',
    styleUrl: './enrolled-by-countries.component.scss'
})
export class EnrolledByCountriesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}