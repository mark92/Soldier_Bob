#pragma strict

var plane: Transform;
var spawnTime = 2;
var planeObj;

function Start () {
	spawnTime = Time.time + 2;
}

function Update () {
	if(Time.time > spawnTime){
		spawnTime += 10;
		planeObj = Instantiate(plane, GameObject.Find("spawnPoint").transform.position, GameObject.Find("spawnPoint").transform.rotation);
	}

}