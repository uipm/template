import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-bt-performance-of-agents',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule],
    templateUrl: './bt-performance-of-agents.component.html',
    styleUrl: './bt-performance-of-agents.component.scss'
})
export class BtPerformanceOfAgentsComponent {}