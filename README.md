# Pull Quote Web Component

A modern, accessible web component for creating pull quotes that preserve the original text flow while providing visual emphasis. Built with Shadow DOM for style encapsulation and proper accessibility support.

This component solves the classic pull quote problem: how to visually emphasize text without duplicating it for screen readers or breaking the document flow.

**Demo:** [https://miklb.github.io/pull-quote/demo.html](https://miklb.github.io/pull-quote/demo.html)

## Features

- ✅ **Accessible by default** - Text is read only once by screen readers
- ✅ **Shadow DOM encapsulation** - Styles won't conflict with your CSS
- ✅ **Highly customizable** - Extensive CSS custom properties support
- ✅ **Modern browser support** - Uses native web standards
- ✅ **Framework agnostic** - Works with any JavaScript framework or vanilla HTML
- ✅ **Lightweight** - Minimal overhead, no dependencies

## Installation

1. [Download pull-quote.js](https://github.com/miklb/pullquote-html-web-component/blob/main/pull-quote.js) and include it in your project.

## Usage

Include the script in your HTML:

```html
<script type="module" src="pull-quote.js"></script>
```

Use the component inline within your content:

```html
<p>
  Your content flows naturally with
  <pull-quote>important text highlighted</pull-quote> as a visual pull quote
  without breaking reading flow.
</p>
```

### Positioning Options

```html
<!-- Left-aligned (default) -->
<pull-quote>This quote floats to the left</pull-quote>

<!-- Right-aligned -->
<pull-quote right>This quote floats to the right</pull-quote>

<!-- Center-aligned -->
<pull-quote center>This quote is centered and breaks the text flow</pull-quote>
```

## Accessibility

This component is built with accessibility as a core feature:

- **Screen reader friendly**: Text is read only once, not duplicated
- **Proper ARIA attributes**: Uses `aria-hidden="true"` and `role="presentation"` on decorative elements
- **Document flow preservation**: Original text remains in natural reading order
- **Semantic markup**: Uses `<aside>` elements with appropriate roles

## Styling

The component uses Shadow DOM for style encapsulation and provides extensive customization through CSS custom properties:

### Default (Left) Styling

```css
:host {
  --pullquote-width: 25%;
  --pullquote-font-size: 1.5em;
  --pullquote-left-margin: 0 0.8em 0.5em 0;
  --pullquote-left-padding: 0.8em;
  --pullquote-border-right: 5px solid #666;
  --pullquote-color: #666;
  --pullquote-left-bg: #f9f9f9;
}
```

### Right-Aligned Styling

```css
:host([right]) {
  --pullquote-right-margin: 0 0 0.8em 0.5em;
  --pullquote-right-padding: 0.8em;
  --pullquote-border-left: 5px solid #f9f;
  --pullquote-right-color: #f9f9f9;
  --pullquote-right-bg: #666;
}
```

### Center-Aligned Styling

```css
:host([center]) {
  --pullquote-center-margin-inline: auto;
  --pullquote-center-margin-block-start: 1.5em;
  --pullquote-center-margin-block-end: 1.5em;
  --pullquote-center-text-align: center;
  --pullquote-center-border-block-start: 3px solid #3498db;
  --pullquote-center-border-block-end: 3px solid #3498db;
  --pullquote-center-color: #2c3e50;
  --pullquote-center-background: #ecf0f1;
  --pullquote-center-font-style: italic;
  --pullquote-center-inline-size: min(90%, 40em);
}
```

### Custom Styling Example

You can override any of the CSS custom properties to match your design:

```css
pull-quote {
  --pullquote-width: 30%;
  --pullquote-font-size: 1.75em;
  --pullquote-color: #2c3e50;
  --pullquote-left-bg: #ecf0f1;
  --pullquote-border-right: 3px solid #3498db;
}
```

## Browser Support

This component uses modern web standards and is supported in:

- ✅ Chrome 54+
- ✅ Firefox 63+
- ✅ Safari 10+
- ✅ Edge 79+ (Chromium-based)

The component uses Shadow DOM and CSS `:host` selectors, which have excellent modern browser support (94%+ global coverage).

## Technical Implementation

- **Shadow DOM**: Provides style encapsulation and proper content projection
- **Slots**: Preserve original content for accessibility and SEO
- **CSS `:host` selectors**: Enable attribute-based styling without JavaScript
- **ARIA attributes**: Ensure screen reader compatibility
- **No dependencies**: Pure vanilla JavaScript web component

## Contributing

Issues and pull requests are welcome! Please ensure any changes maintain accessibility standards and browser compatibility.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

Inspired by [Chris Coyier's better pull quotes technique](https://css-tricks.com/better-pull-quotes/) and [Josh Collingsworth's accessibility-focused approach](https://joshcollinsworth.com/blog/copilot).
