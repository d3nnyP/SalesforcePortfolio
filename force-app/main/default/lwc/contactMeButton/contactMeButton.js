import { LightningElement } from "lwc";
import createLead from "@salesforce/apex/ContactMeController.createLead";

export default class ContactMeButton extends LightningElement {
  dialog;
  firstName;
  lastName;
  linkedIn;
  company;
  email;
  description;
  snackbar;
  contactMeForm;

  renderedCallback() {
    this.dialog = this.template.querySelector(".contact-dialog");
    this.firstName = this.template.querySelector(".firstname");
    this.lastName = this.template.querySelector(".lastname");
    this.linkedIn = this.template.querySelector(".linkedin");
    this.company = this.template.querySelector(".company");
    this.email = this.template.querySelector(".email");
    this.description = this.template.querySelector(".description");
    this.snackbar = this.template.querySelector("c-snackbar");
    this.contactMeForm = this.template.querySelector(".contact-me-form");
  }

  showDialog() {
    this.dialog.showModal();
  }

  resetForm() {
    this.contactMeForm.reset();
  }

  closeDialog() {
    this.dialog.close();
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstnameValue = this.firstName.value;
    const lastnameValue = this.lastName.value;
    const linkedInValue = this.linkedIn.value;
    const companyValue = this.company.value;
    const emailValue = this.email.value;
    const descriptionValue = this.description.value;

    createLead({
      firstname: firstnameValue,
      lastname: lastnameValue,
      linkedin: linkedInValue,
      company: companyValue,
      email: emailValue,
      description: descriptionValue
    }).then(() => {
      this.snackbar.showSnackbar("Your request has been received.");
      this.resetForm();
    });

    this.closeDialog();
  }
}
