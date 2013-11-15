#pragma strict

var leftLimit : float;
var rightLimit : float;
var upperLimit : float;
var lowerLimit : float;

function FixedUpdate () {
	var x = Input.GetAxis("Horizontal");
	var y = Input.GetAxis("Vertical");
	var player = GameObject.Find("Character");
	var cx = player.transform.position.x;
	var cy = player.transform.position.y;
	transform.position = Vector3(x+cx,y+cy,-10);
	transform.position.x = Mathf.Clamp(transform.position.x, leftLimit, rightLimit);
	transform.position.y = Mathf.Clamp(transform.position.y, lowerLimit, upperLimit);
}