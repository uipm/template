import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-re-property-details',
    imports: [MatCardModule],
    templateUrl: './re-property-details.component.html',
    styleUrl: './re-property-details.component.scss'
})
export class RePropertyDetailsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}