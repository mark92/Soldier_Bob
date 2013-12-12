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

function OnCollisionEnter2D(touch : Collision2D) {
        if(touch.gameObject.tag == "Player"){
        	var enemy = transform.parent;
        	enemy.GetComponent(enemyMovement).stunned = !enemy.GetComponent(enemyMovement).stunned;

	        var Character = GameObject.Find("Character");
	        Character.rigidbody2D.AddForce(Vector2(0,8000));

	        if (enemy.GetComponent(enemyMovement).stunned){
                transform.parent.gameObject.rigidbody2D.AddForce(Vector2(direction*6000,0));
	        } else {
	            transform.parent.gameObject.rigidbody2D.velocity = Vector2(0,0);
	        }
	        
        }
}