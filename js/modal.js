var modal = document.getElementById("myModal");
    
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    var modal = document.getElementById("myModal2");
    
    var img = document.getElementById("myImg2");
    var modalImg = document.getElementById("img02");
    var captionText = document.getElementById("caption2");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() { 
      modal.style.display = "none";
    }

    var span = document.getElementsByClassName("close2")[0];
    
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    document.write(today);

    $(function () {
        $(".like").click(function () {
            var input = $(this).find('.qty1');
            input.val(parseInt(input.val())+ 1);
   
        });
    $(".dislike").click(function () {
        var input = $(this).find('.qty2');
        input.val(input.val() - 1);
    });
 });