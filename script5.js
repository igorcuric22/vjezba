const stvari =[ "Holstein", "IsoSport", "Madarice","PallMall","Sunka"];

            let x = stvari.length;

            let i = 0;
            let text = "";

            while(i < 5) {

                text+=`<p style='background-color:red;'>${stvari[i]}</p>`;    
                console.log(stvari[i]);
                i++;

            };

            console.log(text);

            document.getElementById("demo1").innerHTML=text;
