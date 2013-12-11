#pragma strict

function Start () {

}

function Update () {
	transform.position.x = GameObject.Find("Character").transform.position.x + 10;
}