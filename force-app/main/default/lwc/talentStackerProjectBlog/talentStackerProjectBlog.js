import { LightningElement } from "lwc";
import BIGYEARTRACKERBLOGPOST from "@salesforce/resourceUrl/bigYearTrackerBlogPost";
import TSPROJECTSLIDESHOW from "@salesforce/resourceUrl/tsProjectSlideshow";

export default class BigYearTrackerBlog extends LightningElement {
  heroImg = BIGYEARTRACKERBLOGPOST + "/PlaceholderBlogPost.png";
  tsProjectSlideshow1 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow1.jpg";
  tsProjectSlideshow2 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow2.jpg";
  tsProjectSlideshow3 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow3.jpg";
  tsProjectSlideshow4 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow4.jpg";
  tsProjectSlideshow5 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow5.jpg";
  tsProjectSlideshow6 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow6.jpg";
  tsProjectSlideshow7 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow7.jpg";
  tsProjectSlideshow8 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow8.jpg";
  tsProjectSlideshow9 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow9.jpg";
  tsProjectSlideshow10 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow10.jpg";
  tsProjectSlideshow11 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow11.jpg";
  tsProjectSlideshow12 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow12.jpg";
  tsProjectSlideshow13 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow13.jpg";
  tsProjectSlideshow14 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow14.jpg";
  tsProjectSlideshow15 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow15.jpg";
  tsProjectSlideshow16 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow16.jpg";
  tsProjectSlideshow17 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow17.jpg";
  tsProjectSlideshow18 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow18.jpg";
  tsProjectSlideshow19 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow19.jpg";
  tsProjectSlideshow20 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow20.jpg";
  tsProjectSlideshow21 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow21.jpg";
  tsProjectSlideshow22 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow22.jpg";
  tsProjectSlideshow23 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow23.jpg";
  tsProjectSlideshow24 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow24.jpg";
  tsProjectSlideshow25 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow25.jpg";
  tsProjectSlideshow26 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow26.jpg";
  tsProjectSlideshow27 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow27.jpg";
  tsProjectSlideshow28 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow28.jpg";
  tsProjectSlideshow29 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow29.jpg";
  tsProjectSlideshow30 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow30.jpg";
  tsProjectSlideshow31 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow31.jpg";
  tsProjectSlideshow32 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow32.jpg";
  tsProjectSlideshow33 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow33.jpg";
  tsProjectSlideshow34 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow34.jpg";
  tsProjectSlideshow35 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow35.jpg";
  tsProjectSlideshow36 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow36.jpg";
  tsProjectSlideshow37 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow37.jpg";
  tsProjectSlideshow38 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow38.jpg";
  tsProjectSlideshow39 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow39.jpg";
  tsProjectSlideshow40 = TSPROJECTSLIDESHOW + "/tsProjectSlideshow40.jpg";

  slideIndex = 1;

  renderedCallback() {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains("prev")) {
      this.showSlides((this.slideIndex -= 1));
    } else if (targetElement.classList.contains("next")) {
      this.showSlides((this.slideIndex += 1));
    }
  }

  // Thumbnail image controls
  currentSlide(event) {
    const targetSlide = event.target.dataset.slide;
    this.showSlides((this.slideIndex = targetSlide));
  }

  showSlides(n) {
    let slides = this.template.querySelectorAll(".mySlides");
    let dots = this.template.querySelectorAll(".dot");

    // if slideIndex is greater than the number of slides, reset to 1 (first slide)
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    // if slideIndex is less than 1 (first slide), set to the number of slides (last slide)
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    slides.forEach(function (slide) {
      {
        slide.classList.remove("show-slide");
        slide.classList.add("hide-slide");
      }
    });

    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });

    slides[this.slideIndex - 1].classList.remove("hide-slide");
    slides[this.slideIndex - 1].classList.add("show-slide");
    dots[this.slideIndex - 1].classList.add("active");
  }
}
