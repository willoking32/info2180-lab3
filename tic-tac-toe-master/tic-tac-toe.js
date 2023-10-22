
document.addEventListener('DOMContentLoaded',() =>{
	let board = document.getElementById('board');
	let boxes = board.childNodes;
	let newgame = document.querySelector('.btn');
	//console.log(newgame);
	
	for(var i = 1; i < boxes.length; i += 2){
        boxes[i].classList.add("square");
    };
	
/*
boxes.forEach(function(elem, index) {
	elem.target.classList.add('square');
  });
 */
 
	newgame.addEventListener('click', e => {
		e.preventDefault();
		console.log('button clicked!');
	
	});
	
	boxes.forEach(function(elem, index) {
		elem.addEventListener('mouseover', function(e) {
			e.target.classList.add('hover');
		});
		elem.addEventListener('mouseout', function(e) {
			e.target.classList.remove('hover');
		});
	});
	
});


// start game




