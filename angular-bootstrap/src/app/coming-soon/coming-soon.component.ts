import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-coming-soon',
    imports: [],
    templateUrl: './coming-soon.component.html',
    styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}