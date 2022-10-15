# Widget

A bridge/swap widget that you can import on your website and use it
## Import Widget on your site

```html
  <div id="mywidget"></div>
  <script src='mywidget.js'></script>
  <script>
  new MyWidget({
    target: document.getElementById("mywidget"),
    props: {
      name: 'world'
    }
  });
  </script>
```