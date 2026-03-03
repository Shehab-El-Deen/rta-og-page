import { APP_INITIALIZER, Injector, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RtaOgPageComponent } from "./rta-og-page.component";
import { createCustomElement } from "@angular/elements";
import { control } from './rta-og-page.control';
import { SviWindow } from "@sassoftware/vi-api";

@NgModule({
  imports: [CommonModule, FormsModule, RtaOgPageComponent],
  exports: [RtaOgPageComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (injector: Injector) => {
        return () => {
          customElements.define(
            control.directiveName,
            createCustomElement(RtaOgPageComponent, { injector: injector })
          );
          
          const sviWindow = window as SviWindow;
          sviWindow.sas.vi?.config.registerSolutionExtension(control);
        };
      },
      deps: [Injector],
    },
  ],
})
export class RtaOgPageModule {}
