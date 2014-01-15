#pragma strict

var explosionSound : AudioClip;
var bounceSound : AudioClip;
var reflectMultiplier : float; //intensity of bounce
var animator: Animator;
var destroyTime = 0;
var yieldedPoints = false;


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
        var normal : Vector2 = coll.contacts[0].normal;
        var direction : Vector2 = rigidbody2D.velocity;
        var reflection : Vector2;
        reflection = 2 * Vector2.Dot(direction, normal) * normal - direction;
        // rigidbody2D.AddForce(reflection);
        audio.PlayOneShot(bounceSound);
        rigidbody2D.velocity = reflection * reflectMultiplier;
        if (!yieldedPoints)
        {
            GameObject.Find("points").guiText.text = (parseInt(GameObject.Find("points").guiText.text) + 100).ToString();
            yieldedPoints = true;
        }
        // rigidbody2D.fixedAngle = true;
    }
    else
    {
        audio.PlayOneShot(explosionSound);
        animator = GetComponent("Animator");
        animator.SetBool("exploded",true);
        rigidbody2D.velocity = Vector2.zero;
        ExplosionDamage(new Vector2(transform.position.x, transform.position.y), 2);
        destroyTime = Time.time + 1;
        Destroy(gameObject.GetComponent("PolygonCollider2D"));
    }

}

function OnTriggerEnter2D(coll : Collider2D) {
    audio.PlayOneShot(explosionSound);
    animator = GetComponent("Animator");
    animator.SetBool("exploded",true);
    rigidbody2D.velocity = Vector2.zero;
    ExplosionDamage(new Vector2(transform.position.x, transform.position.y), 2);
        Destroy(gameObject.GetComponent("PolygonCollider2D"));
    destroyTime = Time.time + 1;
}


function OnBecameInvisible()
{  
    Destroy(gameObject); 
}
        

function ExplosionDamage(center: Vector2, radius: float) {
    var hitColliders = Physics2D.OverlapCircleAll(center, radius);
    for (var i = 0; i < hitColliders.Length; i++) {
        hitColliders[i].SendMessage("Die",SendMessageOptions.DontRequireReceiver);
    }
}