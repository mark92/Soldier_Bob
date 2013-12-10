#pragma strict

var bullet: Transform;
var bulletObj;

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(touch: Collision2D) {
  if(touch.gameObject.tag == "Player"){
     bulletObj = Instantiate(bullet, GetNearestTaggedObject().position , GetNearestTaggedObject().rotation);
  }
}


function GetNearestTaggedObject() : Transform {
    // and finally the actual process for finding the nearest object:
 
    var nearestDistanceSqr = Mathf.Infinity;
    var taggedGameObjects = GameObject.FindGameObjectsWithTag("spawnBullet"); 
    var nearestObj : Transform = null;
 
    // loop through each tagged object, remembering nearest one found
    for (var obj : GameObject in taggedGameObjects) {
 
        var objectPos = obj.transform.position;
        var distanceSqr = (objectPos - transform.position).sqrMagnitude;
 
        if (distanceSqr < nearestDistanceSqr) {
            nearestObj = obj.transform;
            nearestDistanceSqr = distanceSqr;
        }
    }
 
    return nearestObj;
}