import { Component, OnInit } from "@angular/core";
import { Contacts } from "@ionic-enterprise/contacts/ngx";
import { Contact, ContactName, ContactField } from "@ionic-enterprise/contacts";

//import { VCard, VCardEncoding } from "ngx-vcard";
//import ContactsX from "cordova-plugin-contacts-x";
// import {
//   Contacts,
//   ContactField,
//   ContactName,
// } from "@ionic-native/contacts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  //name = "VCard Test";
  //public vCardEncoding: typeof VCardEncoding = VCardEncoding;

  constructor(private contacts: Contacts) {}

  // public vCard: VCard;
  ngOnInit(): void {
    console.log("Initialized server...");
    //this.vCard = this.createContactCard();
  }

  // public createContactCard(): VCard {
  //   let vCard: VCard = {
  //     version: "2.1",
  //     name: { firstNames: "John", lastNames: "Smith" },
  //     organization: " MyDealership",
  //     telephone: [{ value: "5551114444", param: { type: "work" } }],
  //     email: [{ value: "mydealership@email.com", param: { type: "work" } }],
  //     address: [
  //       {
  //         value: { street: "124 St" },
  //         locality: "New York",
  //         postalCode: "10019",
  //         countryName: "US",
  //       },
  //     ],
  //   };
  //   return vCard;
  // }

  // private askForPermissions() {
  //   ContactsX.hasPermission(
  //     (result) => {
  //       if (result && result.write) {
  //         console.log("Have Contacts write permissions");
  //         return;
  //       }
  //     },
  //     (error) => {
  //       console.log("Error checking Contact permissions: " + error);
  //     }
  //   );
  //   ContactsX.requestPermission(
  //     (result) => {},
  //     (error) => {
  //       console.log("Error receiving Contact permissions " + error);
  //     }
  //   );
  //   //ContactsX.requestWritePermission(
  //   //  (result) => {},
  //   //  (error) => {
  //   //    console.log("Error receiving Contact write permissions " + error);
  //   //  }
  //   // );
  // }

  // public oldCreateContact() {
  //   let contact = this.contacts.create();
  //   contact.name = new ContactName("Blah", "Bob", "Ridiculous");
  //   contact.phoneNumbers = [new ContactField("mobile", "5551112222")];
  //   contact.save().then(
  //     () => alert("Saved new contact"),
  //     (error) => console.log("Error saving: " + error)
  //   );
  // }

  // public createContact() {
  //   this.askForPermissions();

  //   ContactsX.save(
  //     {
  //       firstName: "Drive",
  //       familyName: "Test",
  //       displayName: "My Dealership",
  //       phoneNumbers: [
  //         {
  //           type: "work",
  //           value: "5551112222",
  //         },
  //       ],
  //       emails: [
  //         {
  //           type: "work",
  //           value: "dealer@email.com",
  //         },
  //       ],
  //     },
  //     function (success) {
  //       console.log("saved! " + success);
  //     },
  //     function (error) {
  //       console.error("failed to save " + error);
  //     }
  //   );
  // }

  // public oldCreateContact() {
  //   let contact = this.contacts.create();
  //   contact.name = new ContactName("Fun", "Bob", "Ridiculous");
  //   contact.phoneNumbers = [new ContactField("mobile", "5551112222")];
  //   contact.save().then(
  //     () => alert("Saved new contact"),
  //     (error) => console.log("Error saving: " + error)
  //   );
  // }

  public newCreateContact() {
    let contact = this.contacts.create();
    contact.name = new ContactName("New", "Amazing", "Yay");
    contact.phoneNumbers = [new ContactField("mobile", "7775552121")];
    contact.save().then(
      () => alert("Saved new contact"),
      (error) => console.log("Error saving: " + error)
    );
  }
}
