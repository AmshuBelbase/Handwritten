function pressed()
    { 
      alert();
      var p_k = document.getElementById("input_field").value;
      
      //alert(p_k); 
      if (p_k == " ") {
      }
      else if (p_k == "a" || p_k == "b" || p_k == "c" ||p_k == "d" || p_k == "e" || p_k == "f" || p_k == "g" || p_k == "h" || p_k == "i" || p_k == "j" || p_k == "k" || p_k == "l" || p_k == "m" || p_k == "n" || p_k == "o" || p_k == "p" || p_k == "q" || p_k == "r" || p_k == "s" || p_k == "t" || p_k == "u" || p_k == "v" || p_k == "w" || p_k == "x" || p_k == "y" || p_k == "z"){ 

      	}

      		//document.getElementById("input_field").value = "";
    }
    function change()
    {
      document.getElementById("changeplace").innerHTML = null;
      var p_k = document.getElementById("input_field").value;
      var len = p_k.length;
      for (var i = 0; i < len; i++) {
      	var str = p_k.charAt(i);
      	if (str == " ") {
    document.getElementById("changeplace").innerHTML = document.getElementById("changeplace").innerHTML + '<img src="space.png" width = "30" height="27" class="space"/>';
      }
       else if (str == "a" || str == "b" || str == "c" ||str == "d" || str == "e" || str == "f" || str == "g" || str == "h" || str == "i" || str == "j" || str == "k" || str == "l" || str == "m" || str == "n" || str == "o" || str == "p" || str == "q" || str == "r" || str == "s" || str == "t" || str == "u" || str == "v" || str == "w" || str == "x" || str == "y" || str == "z"){

        if(str == "f" || str == "g" || str == "j" || str == "p" || str == "q" || str == "y"){
        document.getElementById("changeplace").innerHTML = document.getElementById("changeplace").innerHTML + '<img src="'+str+'.png" width = "27" height="37" class="down"/>';
        }
        else{
  document.getElementById("changeplace").innerHTML = document.getElementById("changeplace").innerHTML + '<img src="'+str+'.png" width = "27" height="27" class="normal"/>';     
        }
      }
      
        else{
      document.getElementById("error").innerHTML += "Invalid String : "+str+" ";
        }
 	 }
    }