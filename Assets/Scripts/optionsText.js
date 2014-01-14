#pragma strict

var isReturnButton : boolean;
var isTutorButton : boolean;

function Start () {
    Screen.showCursor = true;
}

function Update () {

}

function OnMouseEnter()
{
     renderer.material.color = Color.yellow;
}

function OnMouseExit()
{
    renderer.material.color = Color.white;
}


function OnMouseUp ()
{
    if (isReturnButton)
    {
        Application.LoadLevel(0);
    }

    if (isTutorButton)
    {
        Application.LoadLevel(4);
    }
}

