import { Component } from '@angular/core';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { HistoryOfBidsComponent } from './history-of-bids/history-of-bids.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-nm-live-auction',
    imports: [MobileAppComponent, HistoryOfBidsComponent, RouterLink, MatCardModule, MatButtonModule, MatProgressBarModule],
    templateUrl: './nm-live-auction.component.html',
    styleUrl: './nm-live-auction.component.scss'
})
export class NmLiveAuctionComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}