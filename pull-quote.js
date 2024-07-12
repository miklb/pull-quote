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
            width: var(--pullquote-width, 12em);
            font-size: var(--pullquote-font-size, 1.5em);
            margin: var(--pullquote-margin, 1em auto);
            color: var(--pullquote-color, #666);
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
      return ['left', 'right'];
    }

    /**
     * Update the pullquote style based on the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'left') {
        this.root.querySelector('.pullquote').style.float = 'left';
        this.root.querySelector('.pullquote').style.borderRight = 'var(--pullquote-border-right, 1px solid #666)';
        this.root.querySelector('.pullquote').style.marginRight = 'var(--pullquote-margin-right, 1em)';
      
      } else if (name === 'right') {
        this.root.querySelector('.pullquote').style.float = 'right';
        this.root.querySelector('.pullquote').style.borderLeft = 'var(--pullquote-border-left, 1px solid #666)';
        this.root.querySelector('.pullquote').style.marginLeft = 'var(--pullquote-margin-left, 1em)';
      }
}
}
// Define the new element
if ('customElements' in window) {
  customElements.define('pull-quote', PullQuote);
}
