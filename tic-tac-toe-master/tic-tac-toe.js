
document.addEventListener('DOMContentLoaded',() =>{
	let board = document.getElementById('board');
	let boxes = board.childNodes;
	//console.log(boxes);
	let newgame = document.querySelector('.btn');
	//console.log(newgame);
	
	//tracking
	let trace = ["","","","","","","","",""];
	let turn = 0;
	let wincon = document.getElementById('status');
	let win = false;
	

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
		
		
		elem.addEventListener('click',function(e){
			if (win == false){
				let xtext = document.createTextNode('X');
				let otext = document.createTextNode('O');
				
				let a = (index / 2)+1 - 0.5;
				
				//console.log(index);
				if (trace[a-1] == ""){
					if (turn % 2 == 0){
						elem.appendChild(otext);
						e.target.classList.add('O');
						trace[a-1] = "O";
						
					}
					else{
						elem.appendChild(xtext);
						e.target.classList.add('X');
						trace[a-1] = "X";
					}
					console.log(a);
					turn += 1;
					//console.log(turn);
					console.log(trace);
				}
				
				//console.log(board);
			}
		});
		
		//mouse on
		elem.addEventListener('mouseover', function(e) {
			e.target.classList.add('hover');
			//console.log(boxes);
		});
		
		//mouse off
		elem.addEventListener('mouseout', function(e) {
			e.target.classList.remove('hover');
		});
	});
	
	
	boxes.forEach(function(elem, index) {
		
		
		elem.addEventListener('click',() =>{
			for (var i = 1;i<trace.length;i +=3){
				if (trace[i] !== ""){
					if(trace[i-1] === trace[i] && trace[i] === trace[i+1]){
						wincon.textContent = 'Congratulations! '+ trace[i]+ ' is the Winner!';
						console.log(wincon);
						win = true;
					}
				}
			}
			//console.log(trace.legnth);
			for (var i = 0; i<= 3; i++){
				if (trace[i] !== ""){
					if ((trace[i] === trace[i+3] && trace[i+3] === trace[i+6]) || (trace[i] === trace[4] && trace[4] === trace[8 - i])){
						wincon.textContent = 'Congratulations! '+ trace[i]+ ' is the Winner!';
						//console.log(wincon);
						win =true;
					}
				}
			}
		});
	});
	
	
	
	newgame.addEventListener('click',()=> {
		 location. reload(true);
	});
});