var http = require('http');
var fs = require('fs');

get();
function get(){

	var mysql = require('mysql');

	var con = mysql.createConnection({
	  	host: "sql5.freemysqlhosting.net",
		user: "sql5397644",
		password: "fHCaEvGhtW",
		database: "sql5397644",
		port: 3306,
	});

con.connect(function(err) {
  if (err) throw err; 
    
  // Hiba's weather table calling city names
  con.query("SELECT * FROM weather WHERE id=4;", function (err, result, fields) {
    if (err) throw err;
	var miamiName = `<h1>${result[0].City.toString()}</h1><p>Miami, officially the City of Miami, is a coastal metropolis located in southeastern Florida in the United States. It is the third most populous metropolis on the East coast of the United States, and it is the seventh largest in the country.</p>`;
      
    fs.appendFile('miami.html', miamiName, err=>{
		if(err){
			console.error(err)
		return
        }
	})  
  });
    
  con.query("SELECT * FROM weather WHERE id=6;", function (err, result, fields) {
    if (err) throw err;
	var phillyName = `<h1>${result[0].City.toString()}</h1><p>Philadelphia, Pennsylvania’s largest city, is notable for its rich history, on display at the Liberty Bell, Independence Hall (where the Declaration of Independence and Constitution were signed) and other American Revolutionary sites. Also iconic are the steps of the Philadelphia Museum of Art, immortalized by Sylvester Stallone’s triumphant run in the film <i>Rocky</i>.</p>`;
      
    fs.appendFile('philly.html', phillyName, err=>{
		if(err){
			console.error(err)
		return}
	})  
  });    
    
  // Doug's travel table for PHL to Miami Flight Cost
  con.query("SELECT * FROM travel WHERE id=(SELECT max(id) FROM travel);", function (err, result, fields) {
    if (err) throw err;
	var price = `<h2>Flight Cost from Philadelphia to Miami</h2><p>$ ${result[0].price.toString()}</p>`;
	
	console.log(price);
	fs.appendFile('philly.html', price, err=>{
		if(err){
			console.error(err)
		return}
	})
  });
    
  // Hiba's weather table for weather
  con.query("SELECT * FROM weather WHERE id=(SELECT max(id) FROM weather);", function (err, result, fields) {
    if (err) throw err;
	var pWeather = `<h2>Temperature and Humidity</h2><p> ${result[0].temperature.toString()} ℉, ${result[0].Humidity.toString()}%</p>`;
	
	fs.appendFile('philly.html', pWeather, err=>{
		if(err){
			console.error(err)
		return}
	})
      
  });
  
  con.query("SELECT * FROM weather WHERE id=4;", function (err, result, fields) {
    if (err) throw err;
	var mWeather = `<h2>Temperature and Humidity</h2><p> ${result[0].temperature.toString()} ℉, ${result[0].Humidity.toString()}%</p>`;
	
	fs.appendFile('miami.html', mWeather, err=>{
		if(err){
			console.error(err)
		return}
	})
      
  });  
    
  //Alishba's map table for location Coordinates
  con.query("SELECT * FROM map WHERE id=1;", function (err, result, fields) {
    if (err) throw err;
	var pCoordinates = `<a href="https://www.google.com/maps/place/Philadelphia,+PA/@40.0026767,-75.2581144,11z/data=!3m1!4b1!4m5!3m4!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!8m2!3d39.9525839!4d-75.1652215"><h2> Exact Location </h2></a><p> ${result[0].lat.toString()}, ${result[0].lng.toString()} </p>`;
	
	fs.appendFile('philly.html', pCoordinates, err=>{
		if(err){
			console.error(err)
		return}
	})
      
  });
    
    con.query("SELECT * FROM map WHERE id=3;", function (err, result, fields) {
    if (err) throw err;
	var mCoordinates = `<a href="https://www.google.com/maps/place/Miami,+FL/@25.7825453,-80.2994993,12z/data=!3m1!4b1!4m5!3m4!1s0x88d9b0a20ec8c111:0xff96f271ddad4f65!8m2!3d25.7616798!4d-80.1917902"><h2> Exact Location </h2></a><p> ${result[0].lat.toString()}, ${result[0].lng.toString()} </p>`;
	
	fs.appendFile('miami.html', mCoordinates, err=>{
		if(err){
			console.error(err)
		return}
	})
      
  });
    
  //Kyla's table for Car Rental Information
  con.query("SELECT * FROM rental_info WHERE id=5;", function (err, result, fields) {
    if (err) throw err;
      
	var pbrand = `<h2>Car Rental Service</h2><h3>Brand</h3><p>${result[0].brand.toString()}<p>`;
    var pAddress = `<h3>Address</h3><p>${result[0].name.toString()}, ${result[0].address_line_1.toString()}, ${result[0].city.toString()}, Pennyslvania</p>`;
    var pHours = `<h3>Hours</h3><p>${result[0].hours.toString()}<p>`;
    var pTelephone = `<h3>Contact</h3><p>${result[0].telephone.toString()}<p>`;
	
	
	fs.appendFile('philly.html', pbrand, err=>{
		if(err){
			console.error(err)
		return}
	})
      
    fs.appendFile('philly.html', pAddress, err=>{
		if(err){
			console.error(err)
		return}
	})
      
    fs.appendFile('philly.html', pHours, err=>{
		if(err){
			console.error(err)
		return}
	})
	
    fs.appendFile('philly.html', pTelephone, err=>{
		if(err){
			console.error(err)
		return}
	})
      
  });
    
  con.query("SELECT * FROM rental_info WHERE id=1;", function (err, result, fields) {
    if (err) throw err;
	var mbrand = `<h2>Car Rental Service</h2><h3>Brand</h3><p>${result[0].brand.toString()}<p>`;
    var mAddress = `<h3>Address</h3><p>${result[0].name.toString()}, ${result[0].address_line_1.toString()}, ${result[0].city.toString()}, Florida</p>`;
    var mHours = `<h3>Hours</h3><p>${result[0].hours.toString()}<p>`;
    var mTelephone = `<h3>Contact</h3><p>${result[0].telephone.toString()}<p>`;
	
	
	fs.appendFile('miami.html', mbrand, err=>{
		if(err){
			console.error(err)
		return}
	})
      
    fs.appendFile('miami.html', mAddress, err=>{
		if(err){
			console.error(err)
		return}
	})
      
    fs.appendFile('miami.html', mHours, err=>{
		if(err){
			console.error(err)
		return}
	})
	
    fs.appendFile('miami.html', mTelephone, err=>{
		if(err){
			console.error(err)
		return}
	})
      
  });
});
}

write();
function write(){

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);	
}

