import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

@Component({
    selector: 'app-nm-explore-all',
    imports: [RouterLink, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule],
    templateUrl: './nm-explore-all.component.html',
    styleUrl: './nm-explore-all.component.scss'
})
export class NmExploreAllComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    // Range Slider
    startValue: number = 18; // Initial value for the left thumb
    endValue: number = 30;   // Initial value for the right thumb
    onThumbChange(event: any, thumb: 'start' | 'end'): void {
        const value = event.target.value; // Get the current value of the thumb being dragged
        if (thumb === 'start') {
            this.startValue = Number(value); // Update the start value
        } else if (thumb === 'end') {
            this.endValue = Number(value); // Update the end value
        }
    }
    formatValue(value: number): string {
        return `${value}`; // Optional: Format the value for display
    }

}