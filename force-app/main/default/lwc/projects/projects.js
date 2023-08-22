import { LightningElement } from "lwc";
import PROJECTS from "@salesforce/resourceUrl/Projects";

export default class Projects extends LightningElement {
  talentStackerImg = PROJECTS + "/projectOverviewTalentStacker.png";
  birdAppImg = PROJECTS + "/birdAppProject.png";
  portfolioProjectImg = PROJECTS + "/portfolioProjectImg.png";
  catLwcImg = PROJECTS + "/catLWCImg.png";
}
