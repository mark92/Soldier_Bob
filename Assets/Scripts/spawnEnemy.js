#pragma strict

var enemy: Transform;
var spawnTime = 5;
var enemyObj;

function Start () {
	spawnTime = Time.time + 1;
}

function Update () {
	if(Time.time > spawnTime){
		spawnTime += 9;
		enemyObj = Instantiate(enemy, transform.GetChild(0).transform.position, transform.GetChild(0).transform.rotation);
	}

}