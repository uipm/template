import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ImpressionsService } from './impressions.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-impressions',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './impressions.component.html',
    styleUrl: './impressions.component.scss'
})
export class ImpressionsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private impressionsService: ImpressionsService
    ) {}

    ngOnInit(): void {
        this.impressionsService.loadChart();
    }

}