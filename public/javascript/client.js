$(".fa-thumbs-up").click(function(e) {
  postId= e.target.getAttribute('name');
  var numLikes = parseInt($(this).text());

//User Unlikes Post
  if ($(this).hasClass("thumbs-up")) {
    $(this).toggleClass("thumbs-up");
    $(this).text(function(i, oldValue) {
      $.ajax({
              url: 'https://sheltered-woodland-75457.herokuapp.com/like',
             contentType: "application/json",
              data: JSON.stringify({id:postId,likes:parseInt(oldValue - 1)}),
              type: 'POST',
            });
      return (parseInt(oldValue) - 1);
    });
    }
//User likes Post
  else {
    $(this).toggleClass("thumbs-up");
    $(this).text(function(i, oldValue) {
      $.ajax({
              url:  'https://sheltered-woodland-75457.herokuapp.com/like',
             contentType: "application/json",
                data: JSON.stringify({id:postId,likes:parseInt(oldValue + 1)}),
              type: 'POST',
            });
      return (parseInt(oldValue) + 1);
    });

  }

});
