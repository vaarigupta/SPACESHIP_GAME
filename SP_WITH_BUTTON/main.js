console.log($);

var key = {
	left: 37,
	up: 38,
	right: 39,
	down: 40
}
$(document).ready(function()
{  var sp = $("#space");
	$(".back").css(
    {

	"background-color":"#f2aaaa"
    })
    
	sp.css(
	{
		"position":"absolute",
		"left" :200,
		"top" :200,
		"width" :400,
		"height" : 120,
		"color": "black",
		"font-size":"45px",
		"font-weight":200,
		"border-color":"black",
		"border-width":8,
		"border-radius" :20,
		"text-align":"center",
		"font-family": "Shrikhand,serif",
		"background-color" : "#e65f76"
		
	})
	
	var direction = {
		top:false,
		bottom:false,
		right:false,
		left:false

	}
    
	$(document).on("keydown",function(e)
	{   
		 // var key = e.keycode;
		 // console.log("Press",e.keycode);
		if(e.keyCode=== key.left)
		{
           direction.left = true;
		}

		if(e.keyCode=== key.up)
		{
           direction.top = true;
		}
		if(e.keyCode=== key.right)
		{
           direction.right = true;
		}
		if(e.keyCode=== key.down)
		{
           direction.bottom = true;
		}

	})
	$(document).on("keyup",function(e)
	{
		
		if(e.keyCode=== key.left)
		{
           direction.left = false;
		}

		if(e.keyCode=== key.up)
		{
           direction.top = false;
		}
		if(e.keyCode=== key.right)
		{
           direction.right = false;
		}
		if(e.keyCode=== key.down)
		{
           direction.bottom = false;
		}

	})
	function move()
	{
		if(direction.left)
		{
           sp.css(
           {
           	left : sp.position().left - 5
           })
		}
		if(direction.right)
		{
			sp.css(
			{
                left : sp.position().left +5
			})
		}
		if(direction.top)
		{ 
			sp.css(
			{
              top : sp.position().top - 5
			})
			
		}
		if(direction.bottom)
		{
			sp.css(
			{
             top : sp.position().top + 5
			})
			
		}

	}
	setInterval(move,5)
   




})
