#pragma strict

var rocket: Transform;
var spawnTime = 2;
var rockets = new Array();

function Start () {
}

function Update () {
	if(Time.time > spawnTime){
		spawnTime += 6;
		rockets.Push(Instantiate(rocket, GameObject.Find("spawnPoint2").transform.position, GameObject.Find("spawnPoint2").transform.rotation));
	}

}