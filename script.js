let arr=["SOLVE YOUR QUERIES FASTER THAN EVER! SEND US A 'HI' ON WHATSAPP AT 6364929121 CLICK HERE", "EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS.",
    "JOIN US FOR SINGLES’ RUN ON 10th NOVEMBER, BANGALORE REGISTER NOW" , "FREE RETURNS AND FREE EXCHANGE. "
]
let header=document.querySelector('p');
console.dir(header);
header.innerText=arr[1];
let i=-1;
setInterval(()=>{
    i++;
    i=i%(arr.length);
    header.innerText=arr[i];
},2000)