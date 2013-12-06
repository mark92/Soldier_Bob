#pragma strict

var olegSmelov = true;
var jumpForce = 120;
var speed = 5;
var facingRight = true;
var animator: Animator;
var pitBottom : float; 
var axisVert = 0;

function FixedUpdate () {
	if(olegSmelov){
		// if(Input.GetAxis ("Vertical")){
		if(Input.touches.Length > 0){
			if(Input.touches[0].position.y < Screen.height*0.3 && Input.touches[0].position.x > Screen.width*0.25 && Input.touches[0].position.x < Screen.width*0.75){
				rigidbody2D.AddForce(Vector2(0,jumpForce*100));
				olegSmelov = false;
			}
		}
	}
		if(Input.touches.Length > 0){
			if(Input.touches[0].position.x < Screen.width*0.25){
				axisVert = -1;
			} else if(Input.touches[0].position.x > Screen.width*0.75){
				axisVert = 1;
			}

		animator = GetComponent("Animator");
		// var axisVert = Input.GetAxis ("Horizontal");
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
		respawn();
		axisVert = 0;
		}
}

function OnCollisionEnter2D(touch: Collision2D) {
		if(touch.gameObject.tag == "arenaBot"){
			olegSmelov = true;
		}
}

function OnTriggerEnter2D(touch: Collider2D) {
		if(touch.gameObject.tag == "arenaBot"){
			olegSmelov = true;
		}
}

function respawn() {
        var player = GameObject.Find("Character");
        if (player.transform.position.y < pitBottom) {
            player.transform.position = new Vector3(-13, 1, 0);
        }
}

function flip(){
	facingRight = !facingRight;

	var buff = transform.localScale;
	buff.x *= -1;
	transform.localScale = buff;
}