/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
	   assert.equal( out,"ala ma "+"\n"+"kota123 "+"\n"+"dupa "+"\n"+"cycki");
    });
	it('should be return one line 2', function () {
	  var out =  filename ("The best work i ever had was great.txt",10);
	   assert.equal( out,"The best "+"\n"+"work i "+"\n"+"ever had "+"\n"+"was great"+"\n"+".txt");
    });
	
	it('should be return one line 3', function () {
	  var out =  filename ("1234 Superhero Cool greats",10);
	   assert.equal( out,"1234 "+"\n"+"Superhero "+"\n"+"Cool "+"\n"+"greats");
    });
	
	it('should be return one non-break word', function () {
	  var out =  filename ("ASDFGHJKLQWERTYUI",10);
	   assert.equal( out,"ASDFGHJKLQ"+"\n"+"WERTYUI");
	   
    });
	it('should be return CAPS symbols with spaces', function () {
	  var out =  filename ("A S D F G H J K L Q W E R T Y U I",10);
	   assert.equal( out,"A S D F G "+"\n"+"H J K L Q "+"\n"+"W E R T Y "+"\n"+"U I");
	   
    });
	it('should be return one non-break word', function () {
	  var out =  filename ("A S D F G H J K L Q W E R T Y U I",10);
	   assert.equal( out,"A S D F G "+"\n"+"H J K L Q "+"\n"+"W E R T Y "+"\n"+"U I");
	   
    });
	

});

	/*
	prepareFileName('a.txt', 10) => "a.txt"
prepareFileName('12345678901', 10) => "1234567890</br>1"
prepareFileName('12345678901.txt', 10) => "1234567890</br>1.txt"
prepareFileName('12345678.txt', 10) => "12345678</br>.txt"
prepareFileName('12345678.12345.1231345.txt', 10) => "12345678.1</br>12345123</br>.txt"
prepareFileName('ala ma kota dupa cycki.txt', 10) => "ala ma kota<br>dupa cyck1<br>.txt"
prepareFileName('ala ma kota123 dupa cycki.txt', 10) => "ala ma </br>kota123 </br>dupa cyck1</br>.txt"
	*/

