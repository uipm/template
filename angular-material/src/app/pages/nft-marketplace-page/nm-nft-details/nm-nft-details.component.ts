import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-nm-nft-details',
    imports: [RouterLink, CarouselModule, MatCardModule, MatButtonModule, NgFor, MatTabsModule, MatTableModule],
    templateUrl: './nm-nft-details.component.html',
    styleUrl: './nm-nft-details.component.scss'
})
export class NmNftDetailsComponent {

    // Product Images
    productImages = [
        {
            url: 'images/nfts/nft-details1.jpg'
        },
        {
            url: 'images/nfts/nft-details2.jpg'
        },
        {
            url: 'images/nfts/nft-details3.jpg'
        },
        {
            url: 'images/nfts/nft-details4.jpg'
        }
    ]
    selectedImage: string = this.productImages[0].url;
    changeImage(image: string) {
        this.selectedImage = image;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['item', 'openPrice', 'yourOffer', 'timeLeft'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}

export interface PeriodicElement {
    item: any;
    openPrice: string;
    yourOffer: string;
    timeLeft: string;
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
        timeLeft: '30 mins ago'
    },
    {
        item: {
            img: 'images/nfts/auction2.gif',
            name: 'Rotating Flower',
            author: 'WalterW.'
        },
        openPrice: '9.25 ETH',
        yourOffer: '6.10 ETH',
        timeLeft: '1 hr ago'
    },
    {
        item: {
            img: 'images/nfts/auction3.jpg',
            name: 'Windows Art',
            author: 'Christino'
        },
        openPrice: '17.24 ETH',
        yourOffer: '11.75 ETH',
        timeLeft: '1.30 hr ago'
    },
    {
        item: {
            img: 'images/nfts/auction4.jpg',
            name: '3D Logo',
            author: 'Hater'
        },
        openPrice: '12.12 ETH',
        yourOffer: '10.24 ETH',
        timeLeft: '35 mins ago'
    },
    {
        item: {
            img: 'images/nfts/auction5.jpg',
            name: 'Awesome Bird',
            author: 'Liveslong'
        },
        openPrice: '8.15 ETH',
        yourOffer: '7.15 ETH',
        timeLeft: '2 hrs ago'
    }
];