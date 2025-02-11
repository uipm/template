import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-total-courses:not(1)',
    imports: [MatCardModule],
    templateUrl: './total-courses.component.html',
    styleUrl: './total-courses.component.scss'
})
export class TotalCoursesComponent {}