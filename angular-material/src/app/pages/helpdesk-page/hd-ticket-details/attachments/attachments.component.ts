import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-attachments',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './attachments.component.html',
    styleUrl: './attachments.component.scss'
})
export class AttachmentsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}