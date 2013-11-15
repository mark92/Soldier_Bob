#pragma strict

function FixedUpdate () {
	var x = Input.GetAxis("Horizontal");
	var y = Input.GetAxis("Vertical");
	var player = GameObject.Find("Character");
	var cx = player.transform.position.x;
	var cy = player.transform.position.y;
	transform.position = Vector3(x+cx,y+cy,-10);
}