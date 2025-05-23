import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreatorsComponent } from './creators/creators.component';
import { FeaturedComponent } from './featured/featured.component';

@Component({
    selector: 'app-nm-marketplace',
    imports: [RouterLink, MatCardModule, MatButtonModule, FeaturedComponent, CreatorsComponent],
    templateUrl: './nm-marketplace.component.html',
    styleUrl: './nm-marketplace.component.scss'
})
export class NmMarketplaceComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}