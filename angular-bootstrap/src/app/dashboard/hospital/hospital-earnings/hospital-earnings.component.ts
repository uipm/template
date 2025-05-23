import { Component, HostListener } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { TotalEarningsService } from './total-earnings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-hospital-earnings',
    imports: [NgIf],
    templateUrl: './hospital-earnings.component.html',
    styleUrl: './hospital-earnings.component.scss'
})
export class HospitalEarningsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private totalEarningsService: TotalEarningsService
    ) {}

    ngOnInit(): void {
        this.totalEarningsService.loadChart();
    }

    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
    }

}