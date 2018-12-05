/*
    Mostly taken from the way Blueprint handles focus styles:
    https://blueprintjs.com/docs/#core/accessibility.focus-management
*/

const TAB_KEY_CODE = 9;

export class InteractionModeEngine {
  constructor(
    private container: Element,
    private className: string,
    private docEl: Element
  ) {}

  public start() {
    this.container.classList.add(this.className);
    this.docEl.addEventListener("mousedown", this.handleMouseDown);
  }

  private reset() {
    this.container.classList.add(this.className);
    this.docEl.removeEventListener("keydown", this.handleKeyDown);
    this.docEl.removeEventListener("mousedown", this.handleMouseDown);
  }

  /*tslint:disable:semicolon*/
  private handleKeyDown = e => {
    if (e.which === TAB_KEY_CODE) {
      this.reset();
      this.docEl.addEventListener("mousedown", this.handleMouseDown);
    }
  };

  private handleMouseDown = () => {
    this.reset();
    this.container.classList.remove(this.className);
    this.docEl.addEventListener("keydown", this.handleKeyDown);
  };
  /*tslint:disable:semicolon*/
}
