import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface StateGroup {
    letter: string;
    names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
    selector: 'app-option-groups',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        AsyncPipe,
        MatCardModule
    ],
    templateUrl: './option-groups.component.html',
    styleUrl: './option-groups.component.scss'
})
export class OptionGroupsComponent {

    // Option Groups Autocomplete
    stateForm = this._formBuilder.group({
        stateGroup: '',
    });
    stateGroups: StateGroup[] = [
        {
            letter: 'A',
            names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
        },
        {
            letter: 'C',
            names: ['California', 'Colorado', 'Connecticut'],
        },
        {
            letter: 'D',
            names: ['Delaware'],
        },
        {
            letter: 'F',
            names: ['Florida'],
        },
        {
            letter: 'G',
            names: ['Georgia'],
        },
        {
            letter: 'H',
            names: ['Hawaii'],
        },
        {
            letter: 'I',
            names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
        },
        {
            letter: 'K',
            names: ['Kansas', 'Kentucky'],
        },
        {
            letter: 'L',
            names: ['Louisiana'],
        },
        {
            letter: 'M',
            names: [
                'Maine',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
            ],
        },
        {
            letter: 'N',
            names: [
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Carolina',
                'North Dakota',
            ],
        },
        {
            letter: 'O',
            names: ['Ohio', 'Oklahoma', 'Oregon'],
        },
        {
            letter: 'P',
            names: ['Pennsylvania'],
        },
        {
            letter: 'R',
            names: ['Rhode Island'],
        },
        {
            letter: 'S',
            names: ['South Carolina', 'South Dakota'],
        },
        {
            letter: 'T',
            names: ['Tennessee', 'Texas'],
        },
        {
            letter: 'U',
            names: ['Utah'],
        },
        {
            letter: 'V',
            names: ['Vermont', 'Virginia'],
        },
        {
            letter: 'W',
            names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
        },
    ];
    stateGroupOptions!: Observable<StateGroup[]>;
    constructor(private _formBuilder: FormBuilder) {}
    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
            startWith(''),
            map(value => this._filterGroup(value || '')),
        );
    }
    private _filterGroup(value: string): StateGroup[] {
        if (value) {
        return this.stateGroups
            .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
            .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }

}