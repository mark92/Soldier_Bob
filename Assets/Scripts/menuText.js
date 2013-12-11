#pragma strict

var isStartButton : boolean = false;
var isExitButton : boolean = false;
var isOptionsButton : boolean = false;

function Start () {

}

function Update() {

}

function OnMouseEnter()
{
     renderer.material.color = Color.yellow;
}

function OnMouseExit()
{
	renderer.material.color = Color.white;
}

function OnMouseUp()
{
	if (isExitButton)
	{
		Debug.Log("would quit");
		Application.Quit();
	}
	// else if (isOptionsButton)
	// {
	// 	Application.LoadLevel(1);
	// }
	else
	{
		Application.LoadLevel(1);
	}
}


