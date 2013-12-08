#pragma strict

var gameIsPaused : boolean = false;
var pauseSound : AudioClip;
var bgm : AudioSource;


function Update () {
    var pauseMenu = GetComponent(pauseMenu);
    bgm = GetComponent(AudioSource);
    if (Input.GetKeyDown(KeyCode.Escape))
    {
        if (gameIsPaused)
        {
            gameIsPaused = false;
            pauseMenu.enabled = false;
            audio.PlayOneShot(pauseSound);
            bgm.Play();
            Time.timeScale = 1;
            Screen.showCursor = false; //comment out for touch controls
        }
        else
        {
            audio.PlayOneShot(pauseSound);
            bgm.Pause();
            Time.timeScale = 0;
            Screen.showCursor = true; //comment out for touch controls
            gameIsPaused = true;
            pauseMenu.enabled = true;
        }
    }
}

function setPause(isPaused : boolean)
{
    gameIsPaused = isPaused;
}