# Widget

A bridge/swap widget that you can import on your website and use it
## Import Widget on your site

```html
  <div id="widget"></div>
  <script src='BridgesAndWidgets.js'></script>
  <script>
  new BridgesAndWidgets({
    target: document.getElementById("widget"),
    props: {
      title: 'Bridge and Swap Tokens here',
      protocols: 'all',
      colors: {
        backgroundColor: '...',
        fontColor: '...',
        ...
      },
      ...
    }
  });
  </script>
```