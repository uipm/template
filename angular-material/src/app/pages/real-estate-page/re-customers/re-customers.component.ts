import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-re-customers',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule],
    templateUrl: './re-customers.component.html',
    styleUrl: './re-customers.component.scss'
})
export class ReCustomersComponent {

    displayedColumns: string[] = ['customerID', 'customer', 'location', 'joinDate', 'phoneNumber', 'emailAddress', 'customerType', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
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
    customerID: string;
    customer: any;
    location: string;
    joinDate: string;
    phoneNumber: string;
    emailAddress: string;
    customerType: string;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        customerID: '#TRE0015',
        customer: {
            img: 'images/users/user1.jpg',
            name: 'Sarah Johnson'
        },
        location: '74 Grim Avenue, San Diego',
        joinDate: '30 Apr 2024',
        phoneNumber: '(123) 456-7890',
        emailAddress: 'sarah@trezo.com',
        customerType: 'Buyer',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0099',
        customer: {
            img: 'images/users/user2.jpg',
            name: 'Michael Smith'
        },
        location: '9 Paul Wayne, Haggerty Road',
        joinDate: '29 Apr 2024',
        phoneNumber: '(987) 654-3210',
        emailAddress: 'smith@trezo.com',
        customerType: 'Seller',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0145',
        customer: {
            img: 'images/users/user3.jpg',
            name: 'Emily Brown'
        },
        location: '61 Ottis Street, Oklahoma City',
        joinDate: '29 Apr 2024',
        phoneNumber: '(555) 258-1598',
        emailAddress: 'brown@trezo.com',
        customerType: 'Commercial',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0247',
        customer: {
            img: 'images/users/user4.jpg',
            name: 'Jason Lee'
        },
        location: 'Residential',
        joinDate: '28 Apr 2024',
        phoneNumber: '(444) 789-0123',
        emailAddress: 'lee@trezo.com',
        customerType: 'Investor',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0299',
        customer: {
            img: 'images/users/user5.jpg',
            name: 'Ashley Davis'
        },
        location: '01 Lakeland, Terrace Detroit',
        joinDate: '27 Apr 2024',
        phoneNumber: '(333) 456-3333',
        emailAddress: 'davis@trezo.com',
        customerType: 'Industrial',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0311',
        customer: {
            img: 'images/users/user66.jpg',
            name: 'Shirley Cooper'
        },
        location: '29 Aviation Way, Los Angeles',
        joinDate: '26 Apr 2024',
        phoneNumber: '(111) 775-8890',
        emailAddress: 'cooper@trezo.com',
        customerType: 'Buyer',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0328',
        customer: {
            img: 'images/users/user67.jpg',
            name: 'Bret Brown'
        },
        location: '2 Little Acres, Lane Mattoon',
        joinDate: '25 Apr 2024',
        phoneNumber: '(555) 222-3365',
        emailAddress: 'bret@trezo.com',
        customerType: 'Seller',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0333',
        customer: {
            img: 'images/users/user68.jpg',
            name: 'Frances Mills'
        },
        location: '74 Grim Avenue, San Diego',
        joinDate: '24 Apr 2024',
        phoneNumber: '(222) 722-8750',
        emailAddress: 'mills@trezo.com',
        customerType: 'Commercial',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0333',
        customer: {
            img: 'images/users/user68.jpg',
            name: 'Frances Mills'
        },
        location: '74 Grim Avenue, San Diego',
        joinDate: '24 Apr 2024',
        phoneNumber: '(222) 722-8750',
        emailAddress: 'mills@trezo.com',
        customerType: 'Commercial',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0328',
        customer: {
            img: 'images/users/user67.jpg',
            name: 'Bret Brown'
        },
        location: '2 Little Acres, Lane Mattoon',
        joinDate: '25 Apr 2024',
        phoneNumber: '(555) 222-3365',
        emailAddress: 'bret@trezo.com',
        customerType: 'Seller',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0311',
        customer: {
            img: 'images/users/user66.jpg',
            name: 'Shirley Cooper'
        },
        location: '29 Aviation Way, Los Angeles',
        joinDate: '26 Apr 2024',
        phoneNumber: '(111) 775-8890',
        emailAddress: 'cooper@trezo.com',
        customerType: 'Buyer',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0299',
        customer: {
            img: 'images/users/user5.jpg',
            name: 'Ashley Davis'
        },
        location: '01 Lakeland, Terrace Detroit',
        joinDate: '27 Apr 2024',
        phoneNumber: '(333) 456-3333',
        emailAddress: 'davis@trezo.com',
        customerType: 'Industrial',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0247',
        customer: {
            img: 'images/users/user4.jpg',
            name: 'Jason Lee'
        },
        location: 'Residential',
        joinDate: '28 Apr 2024',
        phoneNumber: '(444) 789-0123',
        emailAddress: 'lee@trezo.com',
        customerType: 'Investor',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0145',
        customer: {
            img: 'images/users/user3.jpg',
            name: 'Emily Brown'
        },
        location: '61 Ottis Street, Oklahoma City',
        joinDate: '29 Apr 2024',
        phoneNumber: '(555) 258-1598',
        emailAddress: 'brown@trezo.com',
        customerType: 'Commercial',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0099',
        customer: {
            img: 'images/users/user2.jpg',
            name: 'Michael Smith'
        },
        location: '9 Paul Wayne, Haggerty Road',
        joinDate: '29 Apr 2024',
        phoneNumber: '(987) 654-3210',
        emailAddress: 'smith@trezo.com',
        customerType: 'Seller',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0015',
        customer: {
            img: 'images/users/user1.jpg',
            name: 'Sarah Johnson'
        },
        location: '74 Grim Avenue, San Diego',
        joinDate: '30 Apr 2024',
        phoneNumber: '(123) 456-7890',
        emailAddress: 'sarah@trezo.com',
        customerType: 'Buyer',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];