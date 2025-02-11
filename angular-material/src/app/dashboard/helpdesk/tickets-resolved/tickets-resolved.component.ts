import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TicketsResolvedService } from './tickets-resolved.service';

@Component({
    selector: 'app-tickets-resolved',
    imports: [MatCardModule],
    templateUrl: './tickets-resolved.component.html',
    styleUrl: './tickets-resolved.component.scss'
})
export class TicketsResolvedComponent {

    constructor(
        private ticketsResolvedService: TicketsResolvedService
    ) {}

    ngOnInit(): void {
        this.ticketsResolvedService.loadChart();
    }

}