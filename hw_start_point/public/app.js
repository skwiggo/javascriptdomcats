var catFunc = function(name, faveFood, img) {
  var ul = makeUl();
  var li = makeLi(name);
  var li2 = makeLi2(faveFood);
  var img = makeImg(img);
  appendCat(ul, li, li2, img);
}

var makeUl = function() {
  var ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
}

var makeLi = function(name) {
  var li = document.createElement('li');
  li.innerText = name;
  return li;
}

var makeLi2 = function(faveFood) {
  var li2 = document.createElement('li');
  li2.innerText = faveFood;
  return li2;
}

var makeImg = function(image) {
  var img = document.createElement('img');
  img.innerHTML = image;
  return img;
}

var appendCat = function(ul, li, li2, img) { 
  ul.appendChild(li);
  ul.appendChild(li2);
  ul.appendChild(img);
  var cats = document.querySelector('#cats');
  cats.appendChild(ul);
}

var app = function() {
  catFunc("Name: Zelda", "Fave Food: James' hand", "/public/zelda.jpg" )
}

window.onload = app;