function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xyaAA8ApyW":
        Script1();
        break;
      case "5YBQF9ubK42":
        Script2();
        break;
      case "6SnEEEtcnuZ":
        Script3();
        break;
      case "5jNjHe0zb3J":
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

