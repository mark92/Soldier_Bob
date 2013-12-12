#pragma strict

var health = 8;
var rocket: Transform;
var spawnTime = 2;
var explosionSound : AudioClip;
var animator: Animator;
var rocketObj;
var destroyTime = 0;

function Start () {
	spawnTime = Time.time + 2;
}

function Update () {
   if(Time.time > destroyTime && destroyTime != 0){
        Destroy(gameObject);
    }
	if(Time.time > spawnTime){
		spawnTime += 3;
		rocketObj = Instantiate(rocket, transform.GetChild(0).transform.position, transform.GetChild(0).transform.rotation);
	}

}


function Die(){
	audio.PlayOneShot(explosionSound);
    animator = GetComponent("Animator");
    animator.SetBool("exploded",true);
    rigidbody2D.velocity = Vector2.zero;
    destroyTime = Time.time + 1;
	GameObject.Find("points").guiText.text = (parseInt(GameObject.Find("points").guiText.text) + 800).ToString();
}

function TakeDamage(){
	health -= 1;
	if(health <= 0){
		Die();
	}
}

function OnBecameInvisible() //just in case
{  
    Destroy(gameObject); 
}