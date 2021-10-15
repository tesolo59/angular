import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
//import { NgxVcardModule } from "ngx-vcard";
import { Contacts } from "@ionic-enterprise/contacts/ngx";

@NgModule({
  imports: [BrowserModule], //NgxVcardModule
  declarations: [AppComponent],
  providers: [Contacts],
  bootstrap: [AppComponent],
})
export class AppModule {}
