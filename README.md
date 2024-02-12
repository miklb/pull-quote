# Pullquote Web Component
I like pullquotes but there was always the issue with the text being duplicated or pulled out of the flow of the surrounding text. Many years ago, I used [Chris Coyier's jQuery trick](https://css-tricks.com/better-pull-quotes/) but I don't need jQuery and hey, HTML Web Compnents are all the rage now. So here's a simple pullquote web component.

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@miklb/pullquote): `npm install @miklb/pull-quote`
1. [Download the source manually from GitHub](https://github.com/miklb/pullquote/tags) into your project.


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

The pullquote by default uses Chris's original styling, but you can override it with your own CSS. The pullquote is wrapped in a `span` with a class of `pullquote`. 

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
