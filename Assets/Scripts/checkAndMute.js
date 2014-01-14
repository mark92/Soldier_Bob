#pragma strict

function Start () {
	if (PlayerPrefs.GetInt("muted") == 0)
	{
		audio.mute = false;
	}
	else
	{
		audio.mute = true;
	}

}

function Update () {

}