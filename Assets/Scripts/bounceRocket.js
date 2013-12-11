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

function OnCollisionEnter2D(coll : Collision2D) {
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
        ExplosionDamage(new Vector2(transform.position.x, transform.position.y), 2);
        destroyTime = Time.time + 1;
    }

}

function OnTriggerEnter2D(coll : Collider2D) {
    audio.PlayOneShot(explosionSound);
    animator = GetComponent("Animator");
    animator.SetBool("exploded",true);
    rigidbody2D.velocity = Vector2.zero;
    ExplosionDamage(new Vector2(transform.position.x, transform.position.y), 2);
    destroyTime = Time.time + 1;
}


function OnBecameInvisible() //just in case
{  
    Destroy(gameObject); 
}
        

function ExplosionDamage(center: Vector2, radius: float) {
    var hitColliders = Physics2D.OverlapCircleAll(center, radius);
    for (var i = 0; i < hitColliders.Length; i++) {
        hitColliders[i].SendMessage("Die");
    }
}