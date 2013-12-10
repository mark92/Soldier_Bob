#pragma strict

var rocket: Transform;
var spawnTime = 2;
var rocketObj;

function Start () {
	spawnTime = Time.time + 2;
}

function Update () {
	if(Time.time > spawnTime){
		spawnTime += 6;
		rocketObj = Instantiate(rocket, transform.GetChild(0).transform.position, transform.GetChild(0).transform.rotation);
	}

}