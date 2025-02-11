import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-f-transactions',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule],
    templateUrl: './f-transactions.component.html',
    styleUrl: './f-transactions.component.scss'
})
export class FTransactionsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['transactionID', 'date', 'description', 'amount', 'type', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}

export interface PeriodicElement {
    transactionID: string;
    date: string;
    description: string;
    amount: string;
    type: string;
    status: any;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        transactionID: '#TID0015',
        date: '30 Apr 2024',
        description: 'Payment from Client',
        amount: '$5,000',
        type: 'Income',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0099',
        date: '29 Apr 2024',
        description: 'Office Supplies',
        amount: '$10,000',
        type: 'Expense',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0145',
        date: '28 Apr 2024',
        description: 'Website Maintenance',
        amount: '$35,000',
        type: 'Expense',
        status: {
            completed: false,
            pending: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0247',
        date: '27 Apr 2024',
        description: 'Payment from Client',
        amount: '$2,000',
        type: 'Income',
        status: {
            completed: false,
            pending: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0299',
        date: '26 Apr 2024',
        description: 'Advertising Campaign',
        amount: '$15,500',
        type: 'Expense',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0312',
        date: '25 Apr 2024',
        description: 'Office Renovation',
        amount: '$4,000',
        type: 'Expense',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0320',
        date: '24 Apr 2024',
        description: 'Payment from Client',
        amount: '$3,000',
        type: 'Income',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0351',
        date: '23 Apr 2024',
        description: 'Marketing Campaign',
        amount: '$1,500',
        type: 'Expense',
        status: {
            completed: false,
            pending: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0360',
        date: '22 Apr 2024',
        description: 'Payment from Client',
        amount: '$6,500',
        type: 'Income',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0365',
        date: '21 Apr 2024',
        description: 'Software Subscription',
        amount: '$400',
        type: 'Expense',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0365',
        date: '21 Apr 2024',
        description: 'Software Subscription',
        amount: '$400',
        type: 'Expense',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0360',
        date: '22 Apr 2024',
        description: 'Payment from Client',
        amount: '$6,500',
        type: 'Income',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0351',
        date: '23 Apr 2024',
        description: 'Marketing Campaign',
        amount: '$1,500',
        type: 'Expense',
        status: {
            completed: false,
            pending: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0320',
        date: '24 Apr 2024',
        description: 'Payment from Client',
        amount: '$3,000',
        type: 'Income',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0312',
        date: '25 Apr 2024',
        description: 'Office Renovation',
        amount: '$4,000',
        type: 'Expense',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0299',
        date: '26 Apr 2024',
        description: 'Advertising Campaign',
        amount: '$15,500',
        type: 'Expense',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0247',
        date: '27 Apr 2024',
        description: 'Payment from Client',
        amount: '$2,000',
        type: 'Income',
        status: {
            completed: false,
            pending: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0145',
        date: '28 Apr 2024',
        description: 'Website Maintenance',
        amount: '$35,000',
        type: 'Expense',
        status: {
            completed: false,
            pending: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0099',
        date: '29 Apr 2024',
        description: 'Office Supplies',
        amount: '$10,000',
        type: 'Expense',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0015',
        date: '30 Apr 2024',
        description: 'Payment from Client',
        amount: '$5,000',
        type: 'Income',
        status: {
            completed: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];