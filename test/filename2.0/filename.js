var assert = require('assert');
var filename = require('../src/filename');

describe('Filename function', function() {
  
    it('should be defined', function () {
      assert.equal( typeof filename !== undefined, true);
    });
	
	it('should be return empty string', function () {
	  var out = filename("");
      assert.equal( out,"");
	
    });
    it('should be return empty string', function () {
	  var out = filename("Ala ma w sobie dosc 1234567 zeby 1.txt",10);
      assert.equal( out,"Ala ma w "+"\n"+"sobie dosc"+"\n"+" 1234567 "+"\n"+"zeby 1.txt");
	
    });
    
    it('should be return one word with spaces', function () {
		
		var out =  filename ("123456789abcd",10);
	   assert.equal( out,"123456789a"+"\n"+"bcd");
    });
	
	it('should be return one word with spaces', function () {
		
		var out =  filename ("1 2 3 4 56789",10);
	   assert.equal( out,"1 2 3 4 "+"\n"+"56789");
    });
	it('should be return one word with dots', function () {
		
		var out =  filename ("1.2.3.45678",10);
	   assert.equal( out,"1.2.3.4567"+"\n"+"8");
    });
	it('should be return one word with spaces and dots', function () {
		
		var out =  filename ("1.2 3.4 5555",10);
	   assert.equal( out,"1.2 3.4 "+"\n"+"5555");
    });
	it('should be return one line 1', function () {
	  var out =  filename ("ala ma kota123 dupa cycki",10);
	   assert.equal( out,"ala ma "+"\n"+"kota123 "+"\n"+"dupa cycki");
    });
	it('should be return one line 2', function () {
	  var out =  filename ("The best work i ever had was great.txt",10);
	   assert.equal( out,"The best "+"\n"+"work i "+"\n"+"ever had "+"\n"+"was "+"\n"+"great.txt");
    });
	
	it('should be return one line 3', function () {
	  var out =  filename ("1234 Superhero Cool greats",10);
	   assert.equal( out,"1234 "+"\n"+"Superhero "+"\n"+"Cool "+"\n"+"greats");
    });
	
	it('should be return line 4', function () {
	  var out =  filename ("ASDFGHJKLQWERTYUI",10);
	   assert.equal( out,"ASDFGHJKLQ"+"\n"+"WERTYUI");
	   
    });
    it('should be return line 5', function () {
	  var out =  filename ("I am superman and i love beer.txt",10);
	   assert.equal( out,"I am \nsuperman \nand i love\n beer.txt");
	   
    });
	it('should be return line 6', function () {
	  var out =  filename ("I am superman and i love beer.txt",10,"\n");
	   assert.equal( out,"I am \nsuperman \nand i love\n beer.txt");
	   
    });
        it('should be return line 7', function () {
	  var out =  filename ("123456789ABCD",10,"\n");
	   assert.equal( out,"123456789A\nBCD");
	   
    });
     it('should be return line 7', function () {
	  var out =  filename ("123456789ABCD",12,"! !");
	   assert.equal( out,"123456789ABC! !D");
	   
    });
        
        });