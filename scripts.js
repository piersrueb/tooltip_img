//  js file

var toolTip = document.getElementById('tooltip'),
    copy = document.getElementById('copy');

window.addEventListener('mousemove', track);  //  listen for mouse movement
function track(){  //  run function on mouse move
    mouseX = event.clientX + document.body.scrollLeft + 1,  //  get x position of mouse
    mouseY = event.clientY + document.body.scrollTop - 40;  //  get y position of mouse
	toolTip.setAttribute('style', 'top:' + mouseY + 'px; left:' + mouseX + 'px;');  //  set the x and y of tooltip based on mouse position
}

copy.addEventListener('mouseover', showTt);  //  copy hover function
function showTt(e){
    if (e.target.tagName === 'SPAN'){  //  test if hovered element is a span
        toolTip.setAttribute('class', 'show');  //  show the tooltip
        var ttImage = e.target.dataset.img;  //  get the data attribute of hovered span
        toolTip.innerHTML = '<img src="img/' + ttImage + '">';  //  populate the tooltip with an image tag + retrieved data attribute
    } else{
        toolTip.setAttribute('class', '');  //  hide the tooltip
    }
}

//  preload the images

var allCities = ['london', 'paris', 'amsterdam', 'newyork', 'berlin', 'stockholm', 'madrid', 'rome', 'chicago', 'athens', 'vienna', 'copenhagen', 'brussels', 'barcelona', 'dublin'],
    cities = [];

for (var i = 0; i < allCities.length; i++) {
    cities[i] = new Image();
    cities[i].src =  'img/' + allCities[i] + '.jpg';
}
