# Pull Quote Web Component
I like pullquotes but there was always the issue with the text being duplicated or pulled out of the flow of the surrounding text. Many years ago, I used [Chris Coyier's jQuery trick](https://css-tricks.com/better-pull-quotes/) but I don't need jQuery and hey, HTML Web Compnents are all the rage now. So here's a simple pullquote web component.

Demo: [https://miklb.github.io/pull-quote/](https://miklb.github.io/pull-quote/index.html)

## Installation


1. [Include pull-quote.js from GitHub](https://github.com/miklb/pull-quote/blob/main/pull-quote.js) in your project.


### Usage

Make sure you include the `<script>` in your project:


```html
<!-- Host yourself -->
<script type="module" src="pull-quote.js"></script>
```

```html
<p>This is some text in your content. <pull-quote>And this is a pullquote</pull-quote> and more text.</p>
```

### Options
By default, the pullquote floats to the left. Adding the `right` attribute will float to the right. `<pull-quote right></pullquote>`

### Styling

The pullquote by default uses Chris's general original styling (with an alternate example for styling right pull quotes differently from left), but you can override it with your own CSS. [Josh Collingsworth](https://joshcollinsworth.com/blog/copilot) has a great example of using pull quotes and I noticed he's using an `<aside>` with `aria-hidden="true"` so I've updated the component to use that instead of `<span>`. 

I tried to cover most scenarios with CSS variables, but if you find something missing, please let me know. 

```css
.pullquote {
         display: block;
          width: var(--pullquote-width, 25%);
          font-size: var(--pq-font-size, 1.5em);
          margin: var(--pq-left-margin, 0 .8em .5em 0);
          padding: var(--pq-left-padding, .8em);
          float: var(--pullquote-float, left);
          border-right: var(--pullquote-border-right, 5px solid #666);
          color: var(--pullquote-color, #666);
          background-color: var(--pullquote-left-bg, #f9f9f9);
      }
```
with the `right` attribute, the element floats right, and introduces
```css
.pullquote[right] {
          float: right;
          margin: var(--pq-right-margin, 0 0 .5em .8em);
          padding: var(--pq-right-padding, .8em);
          border-left: var(--pq-border-left, 5px solid #f9f);
          border-right: none;
          color: var(--pq-right-color, #f9f9f9);
          background-color: var(--pullquote-right-bg, #666);
      }
```