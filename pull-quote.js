class PullQuote extends HTMLElement {
    constructor () {
      super();
      // Creates a shadow root
					this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        // get original content after the element is connected to the DOM
        let originalContent = this.textContent;

        this.root.innerHTML = `
        <aside class="pullquote" aria-hidden="true" role="presentation">
          ${originalContent}
        </aside>
        <slot></slot>
        <style>
          .pullquote {
            display: block;
            inline-size: var(--pullquote-inline-size, 25%);
            font-size: var(--pullquote-font-size, 1.5em);
            margin-block: var(--pullquote-margin-block-start, 0) var(--pullquote-margin-block-end, 1.5em);
            margin-inline: var(--pullquote-margin-inline-start, 0) var(--pullquote-margin-inline-end, 1.5em);
            padding-block: var(--pullquote-padding-block, 1em);
            padding-inline: var(--pullquote-padding-inline, 1.25em);
            float: var(--pullquote-float, left);
            border-inline-end: var(--pullquote-border-inline-end, 4px solid #666);
            color: var(--pullquote-color, #666);
            background-color: var(--pullquote-background, #f9f9f9);
            clear: var(--pullquote-clear, none);
          }
          
          :host([right]) .pullquote {
            float: right;
            border-inline-start: var(--pullquote-right-border-inline-start, 4px solid #e74c3c);
            border-inline-end: none;
            margin-inline: var(--pullquote-right-margin-inline-start, 1.5em) var(--pullquote-right-margin-inline-end, 0);
            color: var(--pullquote-right-color, #fff);
            background-color: var(--pullquote-right-background, #e74c3c);
          }
          
          :host([center]) .pullquote {
            float: none;
            clear: both;
            margin-inline: var(--pullquote-center-margin-inline, auto);
            margin-block: var(--pullquote-center-margin-block-start, 2em) var(--pullquote-center-margin-block-end, 2em);
            text-align: var(--pullquote-center-text-align, center);
            border-inline: none;
            border-block-start: var(--pullquote-center-border-block-start, 3px solid #3498db);
            border-block-end: var(--pullquote-center-border-block-end, 3px solid #3498db);
            color: var(--pullquote-center-color, #2c3e50);
            background-color: var(--pullquote-center-background, #ecf0f1);
            font-style: var(--pullquote-center-font-style, italic);
            inline-size: var(--pullquote-center-inline-size, min(90%, 40em));
          }
          
          slot {
            display: contents;
          }
        </style>`;
    }
   
   
}
// Define the new element
if ('customElements' in window) {
  customElements.define('pull-quote', PullQuote);
}
