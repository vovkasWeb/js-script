div = document.getElementById("mydiv");
      div.onmousemove = function (e) {
        img = document.getElementById("myimg");
        
        if (e.clientX + img.clientWidth <= div.offsetLeft + div.clientWidth) {
          img.style.left = e.clientX + "px";
        }
      };