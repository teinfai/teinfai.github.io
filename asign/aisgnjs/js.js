function getMinMax(val) {

  // Sort the array form lowest to highest number
 sorted=val.sort(function(a,b){return a - b});
 
 // Add up all the number
 let text = 0;
 for (let i = 0; i < val.length; i++) {
   text += val[i];}
 
 // declare output on specific variable
 average = (text/val.length)
 min = sorted[0]
 max = sorted[sorted.length - 1]
 
 // Print variable
 console.log("min=" + min)
 console.log("max=" +max)
 console.log("average=" +average)
  
 }
 
 var aa = [2,3,4,2,3,4,2,3,4,7,8,9,0,12,2];
 getMinMax(aa)