﻿#pragma strict

var explosionSound : AudioClip;
var reflectMultiplier : float; //intensity of bounce
var explosionSprite : GameObject;

function Start () {    
}

function Update () {

}

function FixedUpdate () {  
}

function OnCollisionExit2D(coll : Collision2D) {
    if (coll.collider.tag == "helmet") {
    	Debug.Log(coll.collider.tag);
    	var normal : Vector2 = coll.contacts[0].normal;
    	var direction : Vector2 = rigidbody2D.velocity;
    	var reflection : Vector2;
    	reflection = 2 * Vector2.Dot(direction, normal) * normal - direction;    	
    	Debug.DrawRay(coll.contacts[0].point, coll.contacts[0].normal, Color.blue, 10);
    	Debug.DrawRay(coll.contacts[0].point, direction, Color.red, 10);
    	Debug.DrawRay(coll.contacts[0].point, reflection, Color.green, 10);
    	// rigidbody2D.AddForce(reflection);
    	rigidbody2D.velocity = reflection * reflectMultiplier;
    	rigidbody2D.fixedAngle = true;
    }
    else
    {
        audio.PlayOneShot(explosionSound);
        // WaitForSeconds(2);
        // var explosion : GameObject = Instantiate();
        // explosionSprite.transform.parent = this.gameObject.transform;
        // Destroy(this.gameObject);
    }
}

function OnBecameInvisible() {  //just in case
    Destroy(this.gameObject); 
}
        