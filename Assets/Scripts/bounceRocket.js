#pragma strict

var explosionSound : AudioClip;
var reflectMultiplier : float; //intensity of bounce
var animator: Animator;
var destroyTime = 0;


function Start () {    
}

function Update () {
    if(Time.time > destroyTime && destroyTime != 0){
        Destroy(gameObject);
    }

}

function FixedUpdate () {  
}

function OnCollisionExit2D(coll : Collision2D) {
    if (coll.collider.tag == "helmet")
    {
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
          animator = GetComponent("Animator");
           animator.SetBool("exploded",true);
 rigidbody2D.velocity = Vector2.zero;
    destroyTime = Time.time + 1;
        // WaitForSeconds(2); //doesn't work(
    }

}

function OnBecameInvisible() //just in case
{  
    Destroy(gameObject); 
}
        