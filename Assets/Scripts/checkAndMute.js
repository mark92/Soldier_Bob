#pragma strict

function Start () {
	audio.mute = true;
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