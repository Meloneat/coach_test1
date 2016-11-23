var xhl = new XMLHttpRequest();
xhl.onreadystatechange = function() {
  if(xhl.readyState == XMLHttpRequest.DONE){
    alert(xhl.responseText);
  }
}
xhl.open('GET','http://huxu.com',true);
xhl.send(null);

var xhl = new XMLHttpRequest();
xhl.onreadystatechange = function(){
  if (xhl.readyState == XMLHttpRequest.DONE)
    alert(xhl.responseText);
}
xhl.open('GET','http:// HUX.COM',true)
