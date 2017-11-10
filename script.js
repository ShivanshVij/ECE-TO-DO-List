window.dataLayer = window.dataLayer || [];
function gtag()
{
  dataLayer.push(arguments)
};
gtag('js', new Date());
gtag('config', 'UA-102743987-2');

$(document).ready(function ()
{

  // A boolean to determine whether finished things are stored
  var x = true;

  var totalItems = 999;
  localStorage.setItem(0, "zero");
  var i = 0;
  for(i = 0; i < totalItems+1; i++)
  {
    var ToStrike = 'table#Assignment_Table tr#' + localStorage.getItem(i);
    $(ToStrike).addClass("strikeout");
  }

  if(localStorage.getItem("hidden") == 1)
  {
      $('.strikeout').addClass("hidden");
      $(".hidebutton").prop("checked", true);
  }

  else
  {

    $('.strikeout').removeClass("hidden");
    $(".hidebutton").prop("checked", false);
  }

  $('.crossbutton').click(function()
  {
    var id = $(this).closest("tr").prop('id');
    localStorage.setItem(id, id);
    var ToStrike = 'table#Assignment_Table tr#' + id;
    $(ToStrike).addClass("strikeout");
  });

  $('.clearbutton').click(function()
  {
    localStorage.clear();
    location.reload();
  });

  $('.finishedbutton').click(function()
  {
    if (x == true)
    {
      $('.strikeout').addClass("hidden");
      localStorage.setItem("hidden", 1);
    }

    else
    {
      $('.strikeout').removeClass("hidden");
      localStorage.setItem("hidden", 0);
    }

  });

});
