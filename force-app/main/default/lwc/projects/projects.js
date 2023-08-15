import { LightningElement } from "lwc";
// import IMAGES from "@salesforce/resourceUrl/Images";

export default class Projects extends LightningElement {
  i;
  expandGrid;
  tabId;
  // tabContent;

  // Hide all elements with class="containerTab", except for the one that matches the clickable grid column
  openTab(event) {
    this.tabId = event.target.dataset.tabid;
    console.log(this.tabId);
    // this.tabContent = this.template.querySelectorAll(`[data-tabid="${this.tabId}"]`);

    this.expandGrid = this.template.querySelectorAll(".containerTab");

    for (this.i = 0; this.i < this.expandGrid.length; this.i++) {
      this.expandGrid[this.i].classList.remove("open");
      this.expandGrid[this.i].classList.add("closed");
    }
    this.template.querySelector(`.${this.tabId}`).classList.remove("closed");
    this.template.querySelector(`.${this.tabId}`).classList.add("open");
  }
  z;

  closeTab(event) {
    let tabName = event.target.dataset.closeid;

    this.template.querySelector(`.${tabName}`).classList.remove("open");
    this.template.querySelector(`.${tabName}`).classList.add("closed");
  }
}
