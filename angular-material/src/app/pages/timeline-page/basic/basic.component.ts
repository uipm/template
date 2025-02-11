import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-basic',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './basic.component.html',
    styleUrl: './basic.component.scss'
})
export class BasicComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}