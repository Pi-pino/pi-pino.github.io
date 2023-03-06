function submitAnswer() {
  var answer = document.querySelector('input[name="answer"]:checked').value;
  if (answer === "Yes") {
    document.body.style.backgroundImage = 'url("thanos.gif")';
	 alert("Chat mo ako!");
	  setTimeout(function() {
         window.location.href = "https://www.instagram.com/_stantan/";
      }, 6000);
   } else {
    var confirmNo = confirm("Are you sure?");
    if (confirmNo) {
      var confirmReally = confirm("Are you really sure?");
      if (confirmReally) {
        var confirmSure = confirm("Sure naba talaga yan?");
        if (confirmSure) {
          var confirmLegit = confirm("Legit ba?");
          if (confirmLegit) {
            document.body.style.backgroundImage = 'url("doctor.gif")';
            setTimeout(function() {
              location.reload();
            }, 2000);
		  }
        }
      }
    }
  }
}
