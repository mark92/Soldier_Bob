#pragma strict
var speed = 10;
var explosionSound : AudioClip;
var animator: Animator;
var destroyTime = 0;

function Start () {
	rigidbody2D.AddForce(Vector2.up*speed*100);
}

function Update () {
    if(Time.time > destroyTime && destroyTime != 0){
        Destroy(gameObject);
    }
}

function OnTriggerEnter2D(touch: Collider2D) {
	audio.PlayOneShot(explosionSound);
          animator = GetComponent("Animator");
           animator.SetBool("exploded",true);
 rigidbody2D.velocity = Vector2.zero;
    destroyTime = Time.time + 1;
}