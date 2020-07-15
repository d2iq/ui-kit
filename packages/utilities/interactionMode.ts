/*
    Mostly taken from the way Blueprint handles focus styles:
    https://blueprintjs.com/docs/#core/accessibility.focus-management
*/

import classNames from "classnames";

const TAB_KEY_CODE = 9;

export class InteractionModeEngine {
  constructor(
    private readonly container: Element,
    private readonly className: string,
    private readonly docEl: Element
  ) {}

  public start() {
    this.container.className = classNames(
      {
        [this.className]: true
      },
      this.container.className
    );
    this.docEl.addEventListener("mousedown", this.handleMouseDown);
  }

  private reset() {
    this.container.className = classNames(
      {
        [this.className]: true
      },
      this.container.className
    );
    this.docEl.removeEventListener("keydown", this.handleKeyDown);
    this.docEl.removeEventListener("mousedown", this.handleMouseDown);
  }

  private readonly handleKeyDown = e => {
    if (e.which === TAB_KEY_CODE) {
      this.reset();
      this.docEl.addEventListener("mousedown", this.handleMouseDown);
    }
  };

  private readonly handleMouseDown = () => {
    this.reset();
    this.container.className = classNames(this.container.className, {
      [this.className]: false
    });
    this.docEl.addEventListener("keydown", this.handleKeyDown);
  };
}
