#pragma strict

var plane: Transform;
var spawnTime = 2;
var planes = new Array();

function Start () {
}

function Update () {
	if(Time.time > spawnTime){
		spawnTime += 10;
		planes.Push(Instantiate(plane, Vector2(GameObject.Find("spawnPoint").transform.position.x, 12.81093), GameObject.Find("spawnPoint").transform.rotation));
	}

}