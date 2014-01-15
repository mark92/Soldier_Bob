#pragma strict

var direction = 1;
var yieldedPoints = false;
var squashSound : AudioClip;

var animator: Animator;

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
        	Debug.Log("active");
        	var enemy = transform.parent;
        	enemy.GetComponent(enemyMovement).squashed = true;

	        var Character = GameObject.Find("Character");
	        Character.rigidbody2D.AddForce(Vector2(0,4000));

	        animator = enemy.GetComponent("Animator");
	        animator.SetBool("squashed", true);
	        if (!yieldedPoints)
	        {
	        	audio.PlayOneShot(squashSound);
	        	GameObject.Find("points").guiText.text = (parseInt(GameObject.Find("points").guiText.text) + 50).ToString();
	        	yieldedPoints = true;
	        }
	        enabled = false;

	        // enemy.GetComponent("BoxCollider2D").enabled = false;
	        // enemy.rigidbody2D.velocity = Vector2(0, 0);
	        // enemy.rigidbody2D.angularVelocity = Vector2(0, 0);
	        // yield WaitForSeconds (2);
	        // Destroy(enemy.gameObject);

	        // if (enemy.GetComponent(enemyMovement).stunned){
         //        transform.parent.gameObject.rigidbody2D.AddForce(Vector2(direction*6000,0));
	        // } else {
	        //     transform.parent.gameObject.rigidbody2D.velocity = Vector2(0,0);
	        // }
	        
        }
}