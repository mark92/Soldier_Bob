#pragma strict
var speed = 10;
var explosionSound : AudioClip;
var animator: Animator;
var destroyTime = 0;

function Start () {
	rigidbody2D.AddForce(Vector2.up*speed*100);
	destroyTime = Time.time + 1;
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
    GameObject.Find("points").guiText.text = (parseInt(GameObject.Find("points").guiText.text) + 100).ToString();
	GetNearestTaggedObject().SendMessage("TakeDamage");
}

function OnBecameInvisible() //just in case
{  
    Destroy(gameObject); 
}


function GetNearestTaggedObject() : GameObject {
    // and finally the actual process for finding the nearest object:
 
    var nearestDistanceSqr = Mathf.Infinity;
    var taggedGameObjects = GameObject.FindGameObjectsWithTag("plane"); 
    var nearestObj : GameObject = null;
 
    // loop through each tagged object, remembering nearest one found
    for (var obj : GameObject in taggedGameObjects) {
 
        var objectPos = obj.transform.position;
        var distanceSqr = (objectPos - transform.position).sqrMagnitude;
 
        if (distanceSqr < nearestDistanceSqr) {
            nearestObj = obj;
            nearestDistanceSqr = distanceSqr;
        }
    }
 
    return nearestObj;
}