#pragma strict

var olegSmelov = true;
var jumpForce = 40;
var speed = 5;
var facingRight = true;
var animator: Animator; 

function Start () {

}

function Update () {	
}

function FixedUpdate () {
	if(olegSmelov){
		if(Input.GetAxis ("Vertical")){
			rigidbody2D.AddForce(Vector2(0,jumpForce*100));
		}
	}
		animator = GetComponent("Animator");
		var axisVert = Input.GetAxis ("Horizontal");
		rigidbody2D.AddForce(Vector2(axisVert*speed*100,0));
		if(axisVert < 0 && facingRight){
			flip();
		} else if(axisVert > 0 && !facingRight){
			flip();
		}

		if(axisVert != 0){
			animator.SetBool("running",true);
		} else {
			animator.SetBool("running",false);
		}
}

function OnCollisionEnter2D(touch: Collision2D) {
		if(touch.gameObject.tag == "arenaBot"){
			olegSmelov = true;
		}
}

function OnCollisionExit2D(touch: Collision2D) {
		if(touch.gameObject.tag == "arenaBot"){
			olegSmelov = false;
		}
}



function flip(){
	facingRight = !facingRight;

	var buff = transform.localScale;
	buff.x *= -1;
	transform.localScale = buff;
}