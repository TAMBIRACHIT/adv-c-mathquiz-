
	player1name = localStorage.getItem("player1name");
	player2name = localStorage.getItem("player2name");

	function addUser(){
        player1name =document.getElementById("player1.input").value;
       player2name=document.getElementById("player2.input").value;
           
           localStorage.setItem("player1name",player1name);
           localStorage.setItem("player2name",player2name);
           
           window.location.replace("game_page.html");
       }
       
      