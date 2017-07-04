## Toolbar

### Usage
```javascript
<script src="toolbar.js"></script>
<script>
var myBarBottom = new toolbar({
   message: 'msg here - BOTTOM ONE',
   close: function(){ alert('pushed x') },
   clickOk: function(){ alert('pushed ok') },
   position: 'bottom' // bottom
});
var myBarTop = new toolbar({
   message: 'msg here - TOP ONE',
   close: function(){ alert('pushed x') },
   clickOk: function(){ alert('pushed ok') },
   position: 'top' // top
});
</script>
```
