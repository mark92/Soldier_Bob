#pragma strict

var direction = 1;

function Start () {

}

function Update () {
	if(Input.GetAxis ("Horizontal") > 0 ){
		direction = 1;
	}
	if(Input.GetAxis ("Horizontal") < 0 ){
		direction = -1;
	}

}

// function OnCollisionStay(touch : Collision) {
// 		if(touch.gameObject.tag == "Player"){
// 			var Character = GameObject.Find("Character");
// 			transform.parent.gameObject.rigidbody.AddForce(direction*1000,0,0);
// 			Character.rigidbody.AddForce(0,1000,0);
// 		}
// }

function OnCollisionEnter2D(touch : Collision2D) {
        if(touch.gameObject.tag == "Player"){
	        var Character = GameObject.Find("Character");
	        Character.rigidbody2D.AddForce(Vector2(0,3000));

	        if (transform.parent.gameObject.rigidbody2D.velocity == Vector2(0,0)){
                transform.parent.gameObject.rigidbody2D.AddForce(Vector2(direction*6000,0));
	        } else {
	            transform.parent.gameObject.rigidbody2D.velocity = Vector2(0,0);
	        }
	        
        }
}