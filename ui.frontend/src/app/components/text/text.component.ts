import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-text',
    styleUrls: ['./text.component.scss'],
    templateUrl: './text.component.html',
})
export class TextComponent {
    @Input() text: string;
    @Input() itemName: string;
    @Input() className: string;

    constructor() {}

    get content() {
        return this.text ? this.text : '';
    }
}
