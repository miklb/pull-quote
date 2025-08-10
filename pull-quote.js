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
            width: var(--pullquote-width, 25%);
            font-size: var(--pq-font-size, 1.5em);
            margin: var(--pq-left-margin, 0 .8em .5em 0);
            padding: var(--pq-left-padding, .8em);
            float: var(--pullquote-float, left);
            border-right: var(--pullquote-border-right, 5px solid #666);
            color: var(--pullquote-color, #666);
            background-color: var(--pullquote-left-bg, #f9f9f9);
          }
          
          :host([right]) .pullquote {
            float: right;
            border-left: var(--pq-border-left, 5px solid #f9f);
            border-right: none;
            margin: var(--pq-right-margin, 0 0 .8em .5em);
            padding: var(--pq-right-padding, .8em);
            color: var(--pq-right-color, #f9f9f9);
            background-color: var(--pq-right-bg, #666);
          }
          
          slot {
            display: contents;
          }
        </style>`;
    }
   
   
    disconnectedCallback() {
     
    }
}
// Define the new element
if ('customElements' in window) {
  customElements.define('pull-quote', PullQuote);
}
