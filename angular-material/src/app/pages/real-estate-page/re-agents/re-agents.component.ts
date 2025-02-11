import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-re-agents',
    imports: [MatCardModule, MatButtonModule, RouterLink],
    templateUrl: './re-agents.component.html',
    styleUrl: './re-agents.component.scss'
})
export class ReAgentsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}