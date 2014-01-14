#pragma strict

var pic1 : Sprite;
var pic2 : Sprite;
var page = 0;

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
    if (page == 0)
    {
        GameObject.Find("tutorPic").GetComponent(SpriteRenderer).sprite = pic1;
        page += 1;
    }
    else if (page == 1)
    {
        GameObject.Find("tutorPic").GetComponent(SpriteRenderer).sprite = pic2;
        GetComponent(TextMesh).text = "Got It!>";
        transform.position.x = -2.3;
        page += 1;
    }
    else
    {
        Application.LoadLevel(3);
    }

}