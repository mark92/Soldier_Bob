#pragma strict

var speed = 1;
var facingRight = false;
var axisVert = 0;
var stunned = false;
var animator: Animator;
var explosionSound : AudioClip;
var destroyTime = 0;

function FixedUpdate () {
   if(Time.time > destroyTime && destroyTime != 0){
        Destroy(gameObject);
    }
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
			if(touch.gameObject.tag == "wall" || touch.gameObject.tag == "enemy"){
				flip();
			}
		}
}

function OnCollisionEnter2D(col: Collision2D){
	if(col.gameObject.tag == "Player"){
		animator = GetComponent("Animator");
		audio.PlayOneShot(explosionSound);
		animator.SetBool("exploded",true);
        destroyTime = Time.time + 1;
		var hitColliders = Physics2D.OverlapCircleAll(new Vector2(transform.position.x, transform.position.y), 2);
	    for (var i = 0; i < hitColliders.Length; i++) {
	        hitColliders[i].SendMessage("Die",SendMessageOptions.DontRequireReceiver);
	    }
	}
}

function flip(){
	facingRight = !facingRight;

	var buff = transform.localScale;
	buff.x *= -1;
	transform.localScale = buff;
}


function Die(){
	if(destroyTime == 0){
		  Destroy(gameObject);
	}
}


function OnBecameInvisible() //just in case
{  
    Destroy(gameObject); 
}