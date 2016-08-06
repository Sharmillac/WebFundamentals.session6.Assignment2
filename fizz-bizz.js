  function writeFizzBizz()
  {
        for(var i = 1; i <= 100; i++)
        {
                if(((i % 3) == 0) && ((i % 5) == 0))
        	     document.write("<P> "+ "FIZZBIZZ"+ "</p>");
  		else if(((i % 3) == 0) )
        	     document.write("<P> "+ "FIZZ"+ "</p>");

 		else if( ((i % 5) == 0))
        	     document.write("<P> "+ "BIZZ"+ "</p>");
                else
	 		document.write("<P> "+ i+ "</p>");	
	}
        
  }