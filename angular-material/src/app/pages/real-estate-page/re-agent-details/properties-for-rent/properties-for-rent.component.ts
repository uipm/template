import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PropertiesForRentService } from './properties-for-rent.service';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-properties-for-rent',
    imports: [MatCardModule],
    templateUrl: './properties-for-rent.component.html',
    styleUrl: './properties-for-rent.component.scss'
})
export class PropertiesForRentComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private propertiesForRentService: PropertiesForRentService
    ) {}

    ngOnInit(): void {
        this.propertiesForRentService.loadChart();
    }

}