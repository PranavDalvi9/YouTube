function navBar(){

    return `                    <!-- menu Icon -->
    <button id="YouTubeMenuNav"><i class="fas fa-bars fa-2x"></i></button> 
    <!-- YouTube Icon -->
    <button id="YouTubeIcon" ><i class="fab fa-youtube fa-2x"></i><span>YouTube</span></button>


    <input type="text" placeholder="Search" id="nameSearch">
    <button onclick="search()" id="search"><i class="fas fa-search fa-1x"></i></button>
    <button id="micPhone"><i class="fas fa-microphone fa-2x"></i></button>


     <!-- Add icon -->
     <button id="addIconYouTube"><i class="far fa-plus-square fa-2x"></i></button>
     <button id="appsYO" onclick="appsYO1()"><i class="fas fa-th fa-2x"></i></button>
     <div id="YouTubeApps">
         <div class="AppsYou"><i class="fab fa-youtube"></i><span>YouTube</span></div><hr>
         <div class="AppsYou"><p>YouTube Music</p></div>
         <div class="AppsYou"><p>YouTube Kids</p></div><hr>
         <div class="AppsYou"><p>YouTube for Artists</p></div>
     </div>
     
     <button id="bellYouTube"><i class="far fa-bell fa-2x"></i></button>
     <button id="profile" onclick="profile()">P</button>
    
     <div id="logProfile">
         <input type="text" placeholder="Email" id="Email"><br><br>
         <input type="text" placeholder="pass" id="Password"><br><br>
         <button class="subClos" id="submit">submit</button>
         <button class="subClos1" id="subClos1">close</button>
     </div>`
}


export {navBar};

