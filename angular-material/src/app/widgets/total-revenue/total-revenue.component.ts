import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { TotalRevenueService } from './total-revenue.service';

@Component({
    selector: 'app-total-revenue:not(1)',
    imports: [MatCardModule],
    templateUrl: './total-revenue.component.html',
    styleUrl: './total-revenue.component.scss'
})
export class TotalRevenueComponent {

    constructor(
        private totalRevenueService: TotalRevenueService,
        public themeService: CustomizerSettingsService
    ) {}

    ngOnInit(): void {
        this.totalRevenueService.loadChart();
    }

}