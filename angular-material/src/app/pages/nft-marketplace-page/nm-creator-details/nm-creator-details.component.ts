import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgClass } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-nm-creator-details',
    imports: [RouterLink, MatCardModule, MatButtonModule, NgClass, MatTableModule],
    templateUrl: './nm-creator-details.component.html',
    styleUrl: './nm-creator-details.component.scss'
})
export class NmCreatorDetailsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['item', 'openPrice', 'yourOffer', 'timeLeft'];
    dataSource = ELEMENT_DATA;

    currentTab = 'tab1'; // Default tab
    filteredData = this.dataSource; // Filtered data for the current tab

    // Define derived data for tabs
    pendingData = this.dataSource.filter((item) => item.status === 'inAuction');
    completedData = this.dataSource.filter((item) => item.status === 'sold');

    /**
     * Switches the current tab and updates the filtered data.
     */
    switchTab(event: MouseEvent, tab: string): void {
        event.preventDefault();
        this.currentTab = tab;
        if (tab === 'tab1') {
            this.filteredData = this.dataSource; // All data
        } else if (tab === 'tab2') {
            this.filteredData = this.pendingData; // In Auction
        } else if (tab === 'tab3') {
            this.filteredData = this.completedData; // Sold
        }
    }

}

export interface PeriodicElement {
    item: any;
    openPrice: string;
    yourOffer: string;
    timeLeft: string;
    status: 'all' | 'inAuction' | 'sold'; // Define item status
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        item: {
            img: 'images/nfts/auction1.gif',
            name: 'Christmas Eve',
            author: 'John Lira'
        },
        openPrice: '11.75 ETH',
        yourOffer: '10.00 ETH',
        timeLeft: '30 mins ago',
        status: 'inAuction'
    },
    {
        item: {
            img: 'images/nfts/auction2.gif',
            name: 'Rotating Flower',
            author: 'WalterW.'
        },
        openPrice: '9.25 ETH',
        yourOffer: '6.10 ETH',
        timeLeft: '1 hr ago',
        status: 'sold'
    },
    {
        item: {
            img: 'images/nfts/auction3.jpg',
            name: 'Windows Art',
            author: 'Christino'
        },
        openPrice: '17.24 ETH',
        yourOffer: '11.75 ETH',
        timeLeft: '1.30 hr ago',
        status: 'sold'
    },
    {
        item: {
            img: 'images/nfts/auction4.jpg',
            name: '3D Logo',
            author: 'Hater'
        },
        openPrice: '12.12 ETH',
        yourOffer: '10.24 ETH',
        timeLeft: '35 mins ago',
        status: 'inAuction'
    },
    {
        item: {
            img: 'images/nfts/auction5.jpg',
            name: 'Awesome Bird',
            author: 'Liveslong'
        },
        openPrice: '8.15 ETH',
        yourOffer: '7.15 ETH',
        timeLeft: '2 hrs ago',
        status: 'inAuction'
    },
    {
        item: {
            img: 'images/nfts/auction1.gif',
            name: 'Christmas Eve',
            author: 'John Lira'
        },
        openPrice: '11.75 ETH',
        yourOffer: '10.00 ETH',
        timeLeft: '30 mins ago',
        status: 'sold'
    },
    {
        item: {
            img: 'images/nfts/auction2.gif',
            name: 'Rotating Flower',
            author: 'WalterW.'
        },
        openPrice: '9.25 ETH',
        yourOffer: '6.10 ETH',
        timeLeft: '1 hr ago',
        status: 'inAuction'
    },
    {
        item: {
            img: 'images/nfts/auction3.jpg',
            name: 'Windows Art',
            author: 'Christino'
        },
        openPrice: '17.24 ETH',
        yourOffer: '11.75 ETH',
        timeLeft: '1.30 hr ago',
        status: 'inAuction'
    },
    {
        item: {
            img: 'images/nfts/auction4.jpg',
            name: '3D Logo',
            author: 'Hater'
        },
        openPrice: '12.12 ETH',
        yourOffer: '10.24 ETH',
        timeLeft: '35 mins ago',
        status: 'inAuction'
    },
    {
        item: {
            img: 'images/nfts/auction5.jpg',
            name: 'Awesome Bird',
            author: 'Liveslong'
        },
        openPrice: '8.15 ETH',
        yourOffer: '7.15 ETH',
        timeLeft: '2 hrs ago',
        status: 'sold'
    }
];