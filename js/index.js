document.getElementById('btn-donate-now-noakhali').addEventListener('click',function(){
   const donationAmount= document.getElementById('input-donate-noakhali').value;
   const historycontainer= document.getElementById('history-container');
   const div= document.createElement('div');
   div.classList.add('bg-red-400')
   div.innerHTML=`
   <p> I am added ${donationAmount}</p>
   `
   historycontainer.appendChild(div)
   console.log(donationAmount);
})