import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-nm-create-nft',
    imports: [RouterLink, FileUploadModule],
    templateUrl: './nm-create-nft.component.html',
    styleUrl: './nm-create-nft.component.scss'
})
export class NmCreateNftComponent {

    // File Uploader
    public multiple: boolean = true;

}