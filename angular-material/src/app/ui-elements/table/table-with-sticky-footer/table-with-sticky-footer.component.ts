import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export interface Transaction {
    item: string;
    cost: number;
}

@Component({
    selector: 'app-table-with-sticky-footer',
    imports: [MatTableModule, CurrencyPipe],
    templateUrl: './table-with-sticky-footer.component.html',
    styleUrl: './table-with-sticky-footer.component.scss'
})
export class TableWithStickyFooterComponent {

    displayedColumns = ['item', 'cost'];
    transactions: Transaction[] = [
        {item: 'Beach ball', cost: 4},
        {item: 'Towel', cost: 5},
        {item: 'Frisbee', cost: 2},
        {item: 'Sunscreen', cost: 4},
        {item: 'Cooler', cost: 25},
        {item: 'Swim suit', cost: 15},
    ];

    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}