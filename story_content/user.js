function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JU8MG2Nqec":
        Script1();
        break;
      case "5qSIA9oprnG":
        Script2();
        break;
      case "6Q2YkRABA3s":
        Script3();
        break;
      case "6cGLiNksyXw":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"1.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "1.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "1.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "1.mp3";
audio.load();
audio.play();
}

