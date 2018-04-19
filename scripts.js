//  js file

var allSPans = document.getElementsByTagName('span'),
    toolTip = document.getElementById('tooltip');

window.addEventListener('mousemove', track);
function track(){
    mouseX = event.clientX + document.body.scrollLeft + 1,
    mouseY = event.clientY + document.body.scrollTop - 40;
	document.getElementById('tooltip').setAttribute('style', 'top:' + mouseY + 'px; left:' + mouseX + 'px;');
}

document.getElementById('copy').addEventListener('mouseover', showTt);
function showTt(e){
    if (e.target.tagName === 'SPAN'){
        var ttImage = e.target.dataset.img;
        toolTip.innerHTML = '<img src="img/' + ttImage + '">';
        toolTip.setAttribute('class', 'show');
    } else{
        toolTip.setAttribute('class', '');
    }
}
