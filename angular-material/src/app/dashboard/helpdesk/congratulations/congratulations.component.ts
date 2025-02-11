import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-congratulations',
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './congratulations.component.html',
    styleUrl: './congratulations.component.scss'
})
export class CongratulationsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}