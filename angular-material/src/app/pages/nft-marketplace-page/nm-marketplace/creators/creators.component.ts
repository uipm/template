import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-creators',
    imports: [MatCardModule, MatButtonModule, RouterLink],
    templateUrl: './creators.component.html',
    styleUrl: './creators.component.scss'
})
export class CreatorsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}