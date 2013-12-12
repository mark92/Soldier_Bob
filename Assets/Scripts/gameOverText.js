#pragma strict

var isExitButton : boolean = false;

function Start ()
{
	Screen.showCursor = true;
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
		Application.LoadLevel(0);
	}
	else
	{
		Application.LoadLevel(1);
	}
}