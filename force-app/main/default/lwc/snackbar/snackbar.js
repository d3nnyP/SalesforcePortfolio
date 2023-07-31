import { LightningElement, api } from "lwc";

export default class Snackbar extends LightningElement {
  snackbarMessage;

  @api
  // eslint-disable-next-line no-unused-vars
  showSnackbar(message) {
    // Get the snackbar DIV
    const snackbar = this.template.querySelector(".snackbar");
    this.snackbarMessage = message;

    // Add the "show" class to DIV
    snackbar.classList.add("show");
    // After 3 seconds, remove the show class from DIV
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(function () {
      snackbar.classList.remove("show");
    }, 2800);
  }
}
