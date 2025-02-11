import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProjectRoadmapService } from './project-roadmap.service';

@Component({
    selector: 'app-project-roadmap',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './project-roadmap.component.html',
    styleUrl: './project-roadmap.component.scss'
})
export class ProjectRoadmapComponent {

    constructor(
        private projectRoadmapService: ProjectRoadmapService
    ) {}

    ngOnInit(): void {
        this.projectRoadmapService.loadChart();
    }

}