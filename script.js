function confirmYes() {
    var confirmLegit = window.confirm("Chat mo ako!");
    if (confirmLegit) {
        var audio = new Audio('boom.mp3');
        audio.play();
        document.body.style.backgroundImage = 'url("thanos.gif")';
        setTimeout(function() {
            window.location.href = "https://www.instagram.com/_stantan/";
        }, 6000);
       
        var questionElement = document.querySelector('.question');
        questionElement.style.display = 'none';
        
        var yesButton = document.querySelector('.yes');
        yesButton.style.display = 'none';
        
        var noButton = document.querySelector('.no');
        noButton.style.display = 'none';
    }
}

function confirmNo() {
    var confirmNo = window.confirm("Are you sure?");
    if (confirmNo) {
        var confirmReally = window.confirm("Are you really sure?");
        if (confirmReally) {
            var confirmSure = window.confirm("Sure naba talaga yan?");
            if (confirmSure) {
                var confirmLegit = window.confirm("Legit ba?");
                if (confirmLegit) {
                    document.body.style.backgroundImage = 'url("doctor.gif")';
                    var noButton = document.querySelector(".no");
                    noButton.style.display = "none";
                    var audio = new Audio('bgsounds.mp3');
					audio.loop=true;
                    audio.play();
                    
                    var questionElement = document.querySelector('.question');
                    questionElement.style.display = 'none';
                    
                    
                }
            }
        }
    }
}
