function getMinMax() {
  var x = document.getElementById("myarr").value;
  let myFunc = num => Number(num);
  var val = Array.from(String(x), myFunc);

  // Sort the array form lowest to highest number
  sorted=val.sort(function(a,b){return a - b});
 
 // Add up all the number for average calculation
  let text = 0;
  for (let i = 0; i < val.length; i++) {
    text += val[i];}
 
 // declare output on specific variable
  average = (text/val.length)
  min = sorted[0]
  max = sorted[sorted.length - 1]
 
//  Print variable
  // console.log("min=" + min)
  // console.log("max=" +max)
  // console.log("average=" +average)
  
    
  document.getElementById("demo").innerHTML =  min;
  document.getElementById("demo1").innerHTML = max;
  document.getElementById("demo2").innerHTML = average;
 }
