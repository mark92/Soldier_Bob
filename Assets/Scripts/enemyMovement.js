#pragma strict

var speed = 1;
var facingRight = false;
var axisVert = 0;
var stunned = false;

function FixedUpdate () {
	if(!stunned){
			if(facingRight){
				 	axisVert = 1;
			} else {
					axisVert = -1;
			}
			rigidbody2D.velocity = Vector2(axisVert*speed,0);
		}
}

function OnTriggerEnter2D(touch: Collider2D) {
	if(!stunned){	
			if(touch.gameObject.tag == "arenaBot"){
				flip();
			}
		}
}

function flip(){
	facingRight = !facingRight;

	var buff = transform.localScale;
	buff.x *= -1;
	transform.localScale = buff;
}