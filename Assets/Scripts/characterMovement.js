#pragma strict

var olegSmelov = true;
var jumpForce = 120;
var speed = 5;
var facingRight = true;
var animator: Animator;
var pitBottom : float; 
var axisVert = 0;
var health = 3;
var dead = false;
var jumpSound : AudioClip;

function Start(){
  animator = GetComponent("Animator");
  // InvokeRepeating("IncreasePoints",0, 1);
}

// function IncreasePoints(){
//     GameObject.Find("points").guiText.text = (parseInt(GameObject.Find("points").guiText.text) + 10).ToString();
// }

function FixedUpdate () {
    if(Input.GetAxis ("Vertical")){
      if(olegSmelov){
                audio.PlayOneShot(jumpSound);
                rigidbody2D.AddForce(Vector2(0,jumpForce*100));
                olegSmelov = false;
                animator.SetBool("jumping", true);
            }
          }
    var axisVert = Input.GetAxis ("Horizontal");
    if(Input.touches.Length > 0){
        for(var i =0; i< Input.touches.Length; i++){
            if(olegSmelov){
                if(Input.touches[i].position.x > Screen.width*0.25 && Input.touches[i].position.x < Screen.width*0.75){
                    rigidbody2D.AddForce(Vector2(0,jumpForce*100));
                    olegSmelov = false;
                    animator.SetBool("jumping", true);
                }
            }
            if(Input.touches[i].position.x < Screen.width*0.25){
                axisVert = -1;
            } else if(Input.touches[i].position.x > Screen.width*0.75){
                axisVert = 1;
            }
        }
    }

  rigidbody2D.AddForce(Vector2(axisVert*speed*100,0));
  if(axisVert < 0 && facingRight){
   flip();
  } else if(axisVert > 0 && !facingRight){
   flip();
  }

  if((axisVert != 0) && (!animator.GetBool("jumping"))) {
   animator.SetBool("running",true);
  } else {
   animator.SetBool("running",false);
  }
  respawn();
  axisVert = 0;
}

function OnCollisionEnter2D(touch: Collision2D) {
  if(touch.gameObject.tag == "arenaBot"){
   olegSmelov = true;
   animator.SetBool("jumping", false);
  }
}

function OnTriggerEnter2D(touch: Collider2D) {
  if(touch.gameObject.tag == "arenaBot"){
   olegSmelov = true;
   animator.SetBool("jumping", false);
  }
}

function respawn() {
        var player = GameObject.Find("Character");
        if (player.transform.position.y < pitBottom) {
            Die();
        }
}

function flip(){
 facingRight = !facingRight;

 var buff = transform.localScale;
 buff.x *= -1;
 transform.localScale = buff;
}

function Die(){
  if(dead) { return; }
  dead = true;
  ressurect();
  if(health == 0){
    PlayerPrefs.SetString("Score", GameObject.Find("points").guiText.text);
    PlayerPrefs.Save();
    Application.LoadLevel(2);
  }
  renderer.enabled = false;
  yield WaitForSeconds(0.4);
  switch(health){
    case 3: Destroy(GameObject.Find("health3")); break;
    case 2: Destroy(GameObject.Find("health2")); break;
    case 1: Destroy(GameObject.Find("health1")); break;
  }
  renderer.enabled = true;
  health -= 1;
  transform.position = new Vector3(-1, -8, 0);
}


function ressurect(){
    yield WaitForSeconds(2);
    dead = false;
}