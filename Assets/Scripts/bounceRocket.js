#pragma strict

var explosionSound : AudioClip;
var collided : boolean;

function Start () {    
}

function Update () {

}

function FixedUpdate () {  
}

function OnCollisionEnter2D(coll : Collision2D) {
    if (coll.collider.tag != "helmet") {
    	Debug.Log(coll.collider.tag);
    	audio.PlayOneShot(explosionSound);
        // var direction : Vector2 = rigidbody2D.velocity;
        // var mag : float = rigidbody2D.velocity.magnitude;
        // rigidbody2D.AddForce(Vector3.Reflect(direction, collisionInfo.contacts[0].normal) * mag, ForceMode.Impulse);
    }
}
        