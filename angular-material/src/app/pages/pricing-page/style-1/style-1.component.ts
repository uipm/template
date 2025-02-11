import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-style-1',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './style-1.component.html',
    styleUrl: './style-1.component.scss'
})
export class Style1Component {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}