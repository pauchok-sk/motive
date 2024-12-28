import * as functions from "./files/functions.js";

import "./inputmask.min.js";
import "../scss/style.scss";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import slider from "./files/slider.js";
import negativeScroll from "./files/negativeScroll.js";
import tab from "./files/tab.js";
import anchors from "./files/anchors.js";
import validate from "./files/validate.js";
import mask from "./files/mask.js";
import Scrollable from "./libs/Scrollable.js";

functions.isWebp();
spoller();
burger();
slider();
negativeScroll();
tab();
anchors();
validate();
mask();

new Scrollable(".bot__tel-wrapper", {
  wheelScrolling: true
});