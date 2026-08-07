/* Site-wide email signup -> Kit (ConvertKit) form 9754678, the same list the Book Finder uses. */
(function(){
  var KIT = "https://app.kit.com/forms/9754678/subscriptions";
  var forms = document.querySelectorAll("form.signup");
  forms.forEach(function(f){
    var input = f.querySelector("input[type=email]");
    var msg = f.parentNode.querySelector(".form-msg") || (function(){
      var m = document.createElement("p"); m.className = "form-msg"; f.parentNode.appendChild(m); return m;
    })();
    f.addEventListener("submit", function(e){
      e.preventDefault();
      var v = (input.value || "").trim();
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){
        msg.style.color = "#b23b3b";
        msg.textContent = "Please enter a valid email.";
        return;
      }
      try{
        fetch(KIT, {
          method:"POST",
          headers:{"Content-Type":"application/x-www-form-urlencoded"},
          body:"email_address="+encodeURIComponent(v)
        }).catch(function(){});
      }catch(err){}
      f.reset();
      input.disabled = true;
      msg.style.color = "";
      msg.textContent = "Thank you — you're on the list. Grace = peace.";
    });
  });
})();
