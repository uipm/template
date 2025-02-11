import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { TotalOrdersService } from './total-orders.service';

@Component({
    selector: 'app-total-orders:not(1)',
    imports: [MatCardModule],
    templateUrl: './total-orders.component.html',
    styleUrl: './total-orders.component.scss'
})
export class TotalOrdersComponent {

    constructor(
        private totalOrdersService: TotalOrdersService,
        public themeService: CustomizerSettingsService
    ) {}

    ngOnInit(): void {
        this.totalOrdersService.loadChart();
    }

}