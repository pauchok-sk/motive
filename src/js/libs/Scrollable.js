export default class Scrollable {
  constructor(selector, options) {
    let defaultOptions = {
      wheelScrolling: false,
    };
    this.container = document.querySelector(selector);
    this.options = Object.assign(defaultOptions, options);

    if (!this.container) {
      console.error("Scrollbale: Selector not found");
      return;
    }

    this.isDragging = false;
    this.startY = null;
    this.scrollTop = null;

    this.events();
    this.container.style.cursor = "grab";
  }

  events() {
    if (this.container) {
      this.container.addEventListener("mousedown", (e) => {
        this.isDragging = true;

        this.startY = e.pageY - this.container.offsetTop;
        this.scrollTop = this.container.scrollTop;
      })

      this.container.addEventListener("mouseup", (e) => {
        this.isDragging = false;
        console.log("fa")
      })

      this.container.addEventListener("mousemove", (e) => {
        if (!this.isDragging) return;
        console.log("fa")
        
        const x = e.pageY - this.container.offsetTop;
        const walkY = (x - this.startY) * 1;
        this.container.scrollTop = this.scrollTop - walkY;
      })

      this.container.addEventListener("mouseleave", (e) => {
        if (this.isDragging) {
          this.isDragging = false;
        }
      })
    }
  }
}
