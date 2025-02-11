import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-re-property-list',
    imports: [MatCardModule, MatButtonModule, RouterLink, MatMenuModule],
    templateUrl: './re-property-list.component.html',
    styleUrl: './re-property-list.component.scss'
})
export class RePropertyListComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}