var buttonGo = document.getElementById('btn-go');
var buttonBack = document.getElementById('btn-back');
var overlay = document.getElementById('overlay');

function addOverlay() {
	overlay.classList.remove('not--shown');
}

function removeOverlay() {
	overlay.classList.add('not--shown')
}