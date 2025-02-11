import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nm-wallet-connect',
    imports: [RouterLink, MatButtonModule, MatCardModule],
    templateUrl: './nm-wallet-connect.component.html',
    styleUrl: './nm-wallet-connect.component.scss'
})
export class NmWalletConnectComponent {}