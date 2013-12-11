#pragma strict

function Start ()
{
	GetComponent(TextMesh).text = "Your score: " + PlayerPrefs.GetString("Score");
	PlayerPrefs.DeleteAll();
}