import { LightningElement, track } from "lwc";
import IMAGES from "@salesforce/resourceUrl/Images";

export default class Projects extends LightningElement {
  i;
  expandGrid;
  tabId;
  certImage = IMAGES + "/DennisPoirierSalesforceAdminCertWeb.png";
  trailheadImage = IMAGES + "/DennisTrailheadSuperbadges.png";
  resumeImage = IMAGES + "/DennisPoirierSalesforceResumePortfolioSite.png";
  @track modal;
  @track image;
  @track modalImage;
  // tabContent;

  // Hide all elements with class="containerTab", except for the one that matches the clickable grid column
  openTab(event) {
    this.tabId = event.target.dataset.tabid;
    console.log(this.tabId);
    // this.tabContent = this.template.querySelectorAll(`[data-tabid="${this.tabId}"]`);

    this.expandGrid = this.template.querySelectorAll(".tab-content");

    for (this.i = 0; this.i < this.expandGrid.length; this.i++) {
      this.expandGrid[this.i].classList.remove("open");
      this.expandGrid[this.i].classList.add("closed");
    }
    this.template.querySelector(`.${this.tabId}`).classList.remove("closed");
    this.template.querySelector(`.${this.tabId}`).classList.add("open");
  }

  closeTab(event) {
    let tabName = event.target.dataset.closeid;

    this.template.querySelector(`.${tabName}`).classList.remove("open");
    this.template.querySelector(`.${tabName}`).classList.add("closed");
  }

  resumeImageClickHandler() {
    this.modal = this.template.querySelector(".myModal");
    this.image = this.template.querySelector(".resume-image");
    this.modalImage = this.template.querySelector(".modal-image");

    this.modal.classList.remove("modal");
    this.modal.classList.add("modal-block");
    this.modalImage.src = this.image.src;
  }

  closeModal() {
    this.modal = this.template.querySelector(".myModal");
    this.modal.classList.remove("modal-block");
    this.modal.classList.add("modal");
  }
}
