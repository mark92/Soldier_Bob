#pragma strict

var plane: Transform;
var spawnTime = 2;
var planeObj;

function Start () {
}

function Update () {
	if(Time.time > spawnTime){
		spawnTime += 10;
		planeObj = Instantiate(plane, Vector2(GameObject.Find("spawnPoint").transform.position.x, 12.81093), GameObject.Find("spawnPoint").transform.rotation);
	}

}