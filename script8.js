function korijen() 
 { 
    let x=document.getElementById("unos").value;
    let xx = parseFloat(x);
    let y = Math.sqrt(xx);

    let y2=`rezultat je ${y.toFixed(5)}`;
    
    document.getElementById("demo1").innerHTML=y2;

    console.log('rezultat je',y);

};