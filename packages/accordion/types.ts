export type HeadingLevel = 2 | 3 | 4 | 5 | 6;
export type AccordionTitleAppearances = "default" | "danger";
export interface AccordionBaseProps {
  /**
   * Whether multiple accordion items can be open at once
   */
  allowMultipleExpanded?: boolean;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * A function that gets called when an accordion item is expanded or closed
   */
  onChange?: (expandedItems: string[]) => void;
}
