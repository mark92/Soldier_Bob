#pragma strict

var newSkin : GUISkin;
var logoTexture : Texture2D;
var pauseSound : AudioClip;
var bgm : AudioSource;

function Start ()
{
    bgm = GameObject.Find("bgmSource").GetComponent(AudioSource);
}

function thePauseMenu() 
{
    //layout
    GUI.BeginGroup(Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 300, 250));
    // GUI.Box(Rect(0, 0, 300, 250), "");
    // GUI.Label(Rect(0, 0, 300, 68), logoTexture);

    //menu buttons
    if (GUI.Button(Rect(55,100,180,40), "Resume")) 
    {
        var script = GetComponent(pauseMenu);
        Time.timeScale = 1;
        GetComponent(pauseGame).setPause(false);
        bgm.Play();
        audio.PlayOneShot(pauseSound);
        Screen.showCursor = false; //comment out for touch controls
        script.enabled = false; 
    };

    if (GUI.Button(Rect(55, 150, 180, 40), "Quit"))
    {
        Time.timeScale = 1;
        Application.LoadLevel(0);
    }

    GUI.EndGroup();
}

function OnGUI () 
{
    GUI.skin = newSkin;
    thePauseMenu();
}