import { LightningElement } from "lwc";
import ICONS from "@salesforce/resourceUrl/Icons";
import { loadStyle } from "lightning/platformResourceLoader";

export default class NavMenu extends LightningElement {
  renderedCallback() {
    loadStyle(this, ICONS + "/style.css");
  }
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  handleHamburgerClicked() {
    const navMenu = this.template.querySelector(".topnav");

    navMenu.classList.toggle("responsive");
  }

  /**
   * Handles the click event on the navigation menu.
   * If the media query matches, toggles the "responsive" class on the navigation menu.
   */
  handleNavMenuClicked() {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const navMenu = this.template.querySelector(".topnav");
    const isResponsive = navMenu.classList.contains("responsive");

    if (mediaQuery.matches && isResponsive) {
      navMenu.classList.toggle("responsive");
    }
  }
}
