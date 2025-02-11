import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-style-3',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './style-3.component.html',
    styleUrl: './style-3.component.scss'
})
export class Style3Component {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}