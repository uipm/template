import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-notice-board',
    imports: [RouterLink],
    templateUrl: './notice-board.component.html',
    styleUrl: './notice-board.component.scss'
})
export class NoticeBoardComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}