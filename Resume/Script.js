function ShowContent(contentType) {
  var i;
  var d = document.getElementsByClassName('description');
  console.log(d);
  for (i = 0; i < d.length; i++) {
    d[i].style.display = 'none';
  }
  document.getElementById(contentType).style.display = 'block';
}
