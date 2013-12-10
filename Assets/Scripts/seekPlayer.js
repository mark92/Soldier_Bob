#pragma strict

var target : Transform;
var speed : float = 5;
 
function Start () {
	target = GameObject.FindWithTag("Player").transform;
     rigidbody2D.AddForce(new Vector2(- transform.position.x + target.position.x, -transform.position.y + target.position.y)*speed*5);
     transform.eulerAngles.z = Mathf.Atan((target.position.y-transform.position.y)/(target.position.x-transform.position.x))* 180/Mathf.PI ;
     if((target.position.y-transform.position.y)/(target.position.x-transform.position.x) < 0){
     	transform.eulerAngles.z = transform.eulerAngles.z - 180;
     }
}    
 
function Update () {
}