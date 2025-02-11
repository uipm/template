import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-recent-transactions',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './recent-transactions.component.html',
    styleUrl: './recent-transactions.component.scss'
})
export class RecentTransactionsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}