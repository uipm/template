import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-upgrade-plans',
    imports: [MatCardModule, MatButtonModule, RouterLink],
    templateUrl: './upgrade-plans.component.html',
    styleUrl: './upgrade-plans.component.scss'
})
export class UpgradePlansComponent {}