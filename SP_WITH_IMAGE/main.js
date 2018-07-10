// console.log($)

// $("body").css(
// {
// 	"background-color": "black"
// })

$(document).ready(function()
{
	

  var spaceship = $("#spaceship");
  spaceship.css(
{
	width :"200px",
	height :"140px",
	position :"absolute",
	left : "100px",
	top : "100px"

})

  var key =
  {  
  	left : 37,
  	top : 38 ,
  	right : 39 ,
  	bottom : 40
  	
  }

var direction = 
{
	left : false,
  	top : false ,
  	right : false,
  	bottom : false
}

$(document).on("keydown",function(e)
{
	if(e.keyCode === key.left )
	{
      
      direction.left = true;

	}
	if(e.keyCode === key.top )
	{
		 direction.top = true;
	}
	if(e.keyCode === key.right )
	{
		direction.right = true;
	}
	if(e.keyCode === key.bottom)
	{
		direction.bottom = true;
	}
})

$(document).on("keyup",function(e)
{
	if(e.keyCode === key.left )
	{
      
      direction.left = false;

	}
	if(e.keyCode === key.top )
	{
		 direction.top = false;
	}
	if(e.keyCode === key.right )
	{
		direction.right = false;
	}
	if(e.keyCode === key.bottom)
	{
		direction.bottom = false;
	}
})


function move()
{
	if(direction.left)
	{
       spaceship.css(
       {
       	left : spaceship.position().left -10
       })
	}
	if(direction.top)
	{

		spaceship.css({
			top : spaceship.position().top - 10 
		})
		
	}
	if(direction.right)
	{  
		spaceship.css({
			left : spaceship.position().left + 10
		})
		
	}
	if(direction.bottom)
	{
		spaceship.css({
			top : spaceship.position().top + 10
		})
		
	}
}

setInterval(move,10)


})