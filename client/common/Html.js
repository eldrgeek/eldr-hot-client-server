/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 */
const Html = ({ html, title,store, css, ids }) => {
  
  return `
  <html>
    <head>
      <title>${title}</title>
      <style>${css}</style>
    </head>
    <body>
      <div id="app">${html}</div>
    <script type="text/javascript">
       window.initialStoreData = ${store}
      </script>
      rehydrate(JSON.stringify(ids));
      </script>
      <script src="./bundle.js"></script>
    </body>
  </html>
`
}

export default Html;
