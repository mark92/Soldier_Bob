#pragma strict

var health = 8;
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


function Die(){
	GameObject.Find("points").guiText.text = (parseInt(GameObject.Find("points").guiText.text) + 800).ToString();
  Destroy(gameObject);
}

function TakeDamage(){
	health -= 1;
	if(health <= 0){
		Die();
	}
}

function OnBecameInvisible() //just in case
{  
    Destroy(gameObject); 
}