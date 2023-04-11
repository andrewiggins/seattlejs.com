import { marked } from 'marked'

/**
 * Page view: catchall for pages authored in markdown
 */
export default function ({ html, state }) {
  let { store } = state
  let { attributes, body } = store
  let title = attributes?.title
  if (store.kind === 'slides') {
    return html` <div class="reveal">
        <div class="slides">
          <section data-markdown>
            <script type="text/template">
              ${body}
            </script>
          </section>
        </div>
      </div>
      <script type="module">
        import Reveal from '/_public/bundles/reveal.mjs'
        import RevealMarkdown from '/_public/bundles/reveal-markdown.mjs'
        Reveal.initialize({
          plugins: [RevealMarkdown]
        })
      </script>`
  } else {
    return html`<my-layout>
      <div id="page">
        <div class="page-title">
          <div><h1>${title}</h1></div>
        </div>
        <div class="page-body">${marked(body)}</div>
      </div>
    </my-layout>`
  }
}
