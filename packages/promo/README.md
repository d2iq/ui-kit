# Promo

The `PromoBanner` and `PromoCard` component are used to bring the user's attention to important content.

## Types of promos

### PromoBanner

The `PromoBanner` component is used for informational content relevant to the page it's being displayed on. It typically appears below the `PageHeader`.

### Customize background

The background can be customized with a pre-defined set of colors or gradients. At the time of this writing, the colors and gradients don't have any semantic meaning attached to them.

### PromoInline

The `PromoCard` component is less attention-grabbing than the `PromoInline`. It appears inline with the other content on the page.

## Content

Required content:

- A headline that succintly captures the primary message of the promo
- Body text with more detailed information

Optional content:

- graphic
- primary CTA
- secondary CTA

## Hiding and showing the promo

The promo will be visible until the user dismisses it.

Any promo must be hidden when the user clicks the close button in the upper-right corner.

Since this component is intentionally attention-grabbing, it's recommended to let users prevent the promo from re-appearing when checking the "Do not show again" checkbox.

If a user has checked the "Do not show again" checkbox, the banner can only be made visible again by some user-initiated action. For example, the banner on the Projects page can be brought back by clicking the "Help" button in the project page's header.

## Do's and Dont's

### Do

- Use a promo to communicate important information that a user would care about
- Allow users to prevent a promo from being shown again
- Keep headline text and body text as short as possible
- Avoid showing a PromoBanner and PromoInline on the same page at the same time

### Don't

- Show a promo just to add visual interest to the page
- Show more than one PromoBanner on a page at the same time
- Use a PromoBanner inline with regular content
