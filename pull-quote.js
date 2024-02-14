class PullQuote extends HTMLElement {
    connectedCallback() {
        // Get the original content
        const originalContent = this.textContent;

        // Create a new element for the duplicated content
        const duplicatedContent = document.createElement('aside');
        duplicatedContent.setAttribute('class', 'pullquote');
        duplicatedContent.setAttribute('aria-hidden', 'true');
        duplicatedContent.setAttribute('hidden', '');
        duplicatedContent.textContent = originalContent;

        // Append the duplicated content to the element
        this.appendChild(duplicatedContent);

        // Add some styles
        const style = document.createElement('style');
        style.textContent = `
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
    `;
        // Append the style to the element
        this.appendChild(style);
    }
}

// Define the new element
customElements.define('pull-quote', PullQuote);