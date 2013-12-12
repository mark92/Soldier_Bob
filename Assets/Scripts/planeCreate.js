#pragma strict

var plane: Transform;
var spawnTime = 2;
var planeObj: Transform;

function Start () {
	spawnTime = Time.time + 2;
}

function Update () {
	if(Time.time > spawnTime){
		spawnTime += 5;
		if(Random.value > 0.5){
			planeObj = Instantiate(plane, GameObject.Find("spawnPointLeft").transform.position, GameObject.Find("spawnPointLeft").transform.rotation);
			planeObj.GetComponent(planeFly).facingRight = true;
		} else {
			planeObj = Instantiate(plane, GameObject.Find("spawnPointRight").transform.position, GameObject.Find("spawnPointRight").transform.rotation);
		}
	}

}