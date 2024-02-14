# Pull Quote Web Component
I like pullquotes but there was always the issue with the text being duplicated or pulled out of the flow of the surrounding text. Many years ago, I used [Chris Coyier's jQuery trick](https://css-tricks.com/better-pull-quotes/) but I don't need jQuery and hey, HTML Web Compnents are all the rage now. So here's a simple pullquote web component.

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@miklb/pull-quote): `npm install @miklb/pull-quote`
1. [Download the source manually from GitHub](https://github.com/miklb/pullq-uote/tags) into your project.


### Usage

Make sure you include the `<script>` in your project (choose one of these):


```html
<!-- Host yourself -->
<script type="module" src="pull-quote.js"></script>
```

```html
<p>This is some text in your content. <pull-quote>And this is a pullquote</pull-quote> and more text.</p>
```

### Styling

The pullquote by default uses Chris's original styling, but you can override it with your own CSS. [Josh Collingsworth](https://joshcollinsworth.com/blog/copilot) has a great example of using pull quotes and I noticed he's using an `<aside>` with `aria-hidden="true"` so I've updated the component to use that instead of `<span>`. 

```html

Default CSS
```css
.pullquote {
        display: block;
        float: right;
        padding: 0 0 0 10px;
        margin: 0 0 10px 10px;
        width: 170px;
        font-size: 1.5em;
        line-height: 1.4em;
        text-align: right;
        color: #666;
        border-left: 3px solid #ccc;
      }
```
