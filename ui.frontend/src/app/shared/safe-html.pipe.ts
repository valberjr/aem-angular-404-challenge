import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) {}
    transform(value: string): SafeResourceUrl | string {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
