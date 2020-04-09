$(".fa-thumbs-up").click(function(e) {
  postId= e.target.getAttribute('name');
  var numLikes = parseInt($(this).text());

//User Unlikes Post
  if ($(this).hasClass("thumbs-up")) {
    $(this).toggleClass("thumbs-up");
    $(this).text(function(i, oldValue) {
      oldValue=parseInt(oldValue,10)-1;
      $.ajax({
          //url: 'http://localhost:3000/like',
             url: 'https://sheltered-woodland-75457.herokuapp.com/like',
             contentType: "application/json",
              data: JSON.stringify({id:postId,likes:oldValue}),
              type: 'POST',
            });

      return  (parseInt(oldValue,10));
    });
    }
//User likes Post
  else {
    $(this).toggleClass("thumbs-up");
    $(this).text(function(i, oldValue) {
      oldValue = parseInt(oldValue,10)+1;
      console.log(oldValue);
      $.ajax({
        //url: 'http://localhost:3000/like',
            url:  'https://sheltered-woodland-75457.herokuapp.com/like',
             contentType: "application/json",
              data: JSON.stringify({id:postId,likes:oldValue}),
              type: 'POST',
            });

      return (parseInt(oldValue,10));
    });

  }

});
