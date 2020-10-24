
var btn=document.getElementById("calculate");
btn.onclick=function(){
    var i;
    var toplam=0;
    var sayi=Number(document.getElementById("number").value);
    for(i=1;i<sayi;i++)
    {
        if (sayi%i==0)
        {
        toplam=toplam+i;	
        }
    }
        if (sayi==toplam)
        {
            document.getElementById("sonuc").innerHTML=sayi + " is a Perfect Number";	 
        } 
        else
        {
            document.getElementById("sonuc").innerHTML=sayi + " is not a Perfect Number";
        }
    };