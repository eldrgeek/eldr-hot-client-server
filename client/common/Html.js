/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const Html = ({ body, title,store,styles }) => {

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
      <script type="text/javascript">
       window.initialStoreData = ${store}
    </script>
    <script src="/bundle.js"></script>
    </body>
  </html>
`};

export default Html;
