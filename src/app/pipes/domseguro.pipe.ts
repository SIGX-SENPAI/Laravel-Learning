import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domsanitizer: DomSanitizer){}
  transform(value: string, ...args: any[]): SafeResourceUrl {
    return this.domsanitizer.bypassSecurityTrustResourceUrl( value );
  }

}
