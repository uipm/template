import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-advanced',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './advanced.component.html',
    styleUrl: './advanced.component.scss'
})
export class AdvancedComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}