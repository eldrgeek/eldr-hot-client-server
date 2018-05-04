/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
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
      debugger
      rehydrate(JSON.stringify(ids));
      </script>
      <script src="./bundle.js"></script>
      
    </body>
  </html>
`
}
//<script>
      //   debugger
      //   rehydrate(${JSON.stringify(ids)});
      //   render(<App />, document.getElementById('app'));
      // </script>

  // return `
  // <!DOCTYPE html>
  // <html>
  //   <head>
  //     <title>${title}</title>
  //     ${styles}
  //   </head>
  //   <body style="margin:0">
  //     <div id="root">${body}</div>
  //     <script type="text/javascript">
  //      window.initialStoreData = ${store}
  //   </script>
  //   <script src="/bundle.js"></script>
  //   </body>
  // </html>
// `};

export default Html;
