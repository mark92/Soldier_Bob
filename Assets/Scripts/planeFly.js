#pragma strict

var facingRight = false;

function Start () {
	if(facingRight){
		flip();
	}
}

function FixedUpdate () {
	if(!facingRight){
		transform.position.x -=1;
	} else {	
		transform.position.x +=1;
	}
}


function flip(){
	var buff = transform.localScale;
	buff.x *= -1;
	transform.localScale = buff;
}