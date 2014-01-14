#pragma strict

var musicSource : GameObject;

function Start () {

	if (PlayerPrefs.GetInt("muted") != 0)
	{
		Debug.Log("muted");
		PlayerPrefs.SetInt("muted", 1);
		PlayerPrefs.Save();
		Debug.Log(PlayerPrefs.GetInt("muted"));
		GetComponent(TextMesh).text = "Music: Off";
		GameObject.Find("Main Camera").audio.mute = true;
	}
	else
	{
		Debug.Log("not muted");
		PlayerPrefs.SetInt("muted", 0);
		PlayerPrefs.Save();
		Debug.Log(PlayerPrefs.GetInt("muted"));
		GetComponent(TextMesh).text = "Music: On";
		GameObject.Find("Main Camera").audio.mute = false;
	}

	// PlayerPrefs.DeleteAll();

}

function Update () {

}

function OnMouseUp () 
{
	if (PlayerPrefs.GetInt("muted") == 1)
	{
		PlayerPrefs.SetInt("muted", 0);
	    PlayerPrefs.Save();
	    Debug.Log(PlayerPrefs.GetInt("muted"));
	    GetComponent(TextMesh).text = "Music: On";
	    GameObject.Find("Main Camera").audio.mute = false;
	}
	else
	{
		PlayerPrefs.SetInt("muted", 1);
	    PlayerPrefs.Save();
	    Debug.Log(PlayerPrefs.GetInt("muted"));
	    GetComponent(TextMesh).text = "Music: Off";
	    GameObject.Find("Main Camera").audio.mute = true;
	}
	
}