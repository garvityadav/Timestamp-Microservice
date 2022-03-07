app.get("/api/:date?",(req,res)=>{
  let date = req.params.date;
  let parseDate = new Date(parseInt(date));
  console.log(parseDate.toUTCString());
  let finalDate = new Date(date);
  console.log(typeof(date));
  if(!date){
    res.json({unix : (new Date()).getTime(),utc : (new Date()).toUTCString()});
  }
  else {if(finalDate.toUTCString()!=="Invalid Date"){
    res.json({unix : finalDate.getTime(),utc : finalDate.toUTCString()});
  }
  else if(parseDate.toUTCString()!=="Invalid Date"){
     res.json({unix :parseInt(date) ,utc : parseDate.toUTCString()});
  }
  else{
    res.json({error: "Invalid Date"});
  }
       }
});
