class PullQuote extends HTMLElement {
    constructor () {
      super();
      // Creates a shadow root
					this.root = this.attachShadow({mode: 'closed'});
        
        // get original content
        let originalContent = this.textContent;

        this.root.innerHTML = `
        <aside class="pullquote" aria-hidden="true" hidden>
          ${originalContent}
        </aside>
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
          }`;

    }
   
    connectedCallback() {
      
    }

    disconnectedCallback() {
     
    }

    /**
 * Create a list of attributes to observe
 */
    static get observedAttributes() {
      return ['right'];
    }

    /**
     * Update the pullquote style based on the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
       if (name === 'right') {
       // .pullquote { float: right; border-left: 2px solid #666; border-right: none; }
        this.root.querySelector('.pullquote').style.float = 'right';
        this.root.querySelector('.pullquote').style.borderLeft = 'var(--pq-border-left, 5px solid #f9f)';
        this.root.querySelector('.pullquote').style.borderRight = 'none';
        this.root.querySelector('.pullquote').style.margin = 'var(--pq-right-margin, 0 0 .8em .5em)';
        this.root.querySelector('.pullquote').style.padding = 'var(--pq-right-padding, .8em)';
        this.root.querySelector('.pullquote').style.color = 'var(--pq-right-color, #f9f9f9)';
        this.root.querySelector('.pullquote').style.backgroundColor = 'var(--pq-right-bg, #666)';
      }
}
}
// Define the new element
if ('customElements' in window) {
  customElements.define('pull-quote', PullQuote);
}
