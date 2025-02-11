import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { TotalCustomersService } from './total-customers.service';

@Component({
    selector: 'app-total-customers:not(1)',
    imports: [MatCardModule],
    templateUrl: './total-customers.component.html',
    styleUrl: './total-customers.component.scss'
})
export class TotalCustomersComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private totalCustomersService: TotalCustomersService
    ) {}

    ngOnInit(): void {
        this.totalCustomersService.loadChart();
    }

}