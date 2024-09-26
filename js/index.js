//! common function cor amount calculation
function balanceCalculation(donationProject, donated){
  const mainBalance = document.getElementById("main-balance").innerText;
  const mainBalanceAmount = parseFloat(mainBalance);
  document.getElementById("main-balance").innerText =
  mainBalanceAmount - donated;
document.getElementById("noakhali-balance").innerText =
donationProject + donated;
}


//? Toggling
document.getElementById('btn-top-history').addEventListener('click',function(){
  const donationContainer= document.getElementById('donation-fields')
  const historySection= document.getElementById('history-container');
  const donationBtn = document.getElementById('btn-top-donation');
  const historyBtn = document.getElementById('btn-top-history');
  donationContainer.classList.add('hidden')
  donationBtn.classList.remove('bg-lime-400')
  historySection.classList.remove('hidden');
  historyBtn.classList.add('bg-lime-400');
})

document.getElementById('btn-top-donation').addEventListener('click',function(){
  const donationContainer= document.getElementById('donation-fields')
  const historySection= document.getElementById('history-container');
  const donationBtn = document.getElementById('btn-top-donation');
  const historyBtn = document.getElementById('btn-top-history');
  donationContainer.classList.remove('hidden')
  donationBtn.classList.add('bg-lime-400')
  historySection.classList.add('hidden');
  historyBtn.classList.remove('bg-lime-400');
})


//! Noakhali donation
document
  .getElementById("btn-donate-now-noakhali")
  .addEventListener("click", function () {
    const donation = document.getElementById("input-donate-noakhali").value;
    const donationAmount = parseFloat(donation); //! add
    const hasLetter = /[a-zA-Z]/.test(donation);
    //! main
    const noakhaliBalance =
      document.getElementById("noakhali-balance").innerText;
    const noakhaliBalanceAmount = parseFloat(noakhaliBalance);
    // console.log(mainBalanceAmount, noakhaliBalanceAmount);
    const historycontainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add(
      "mt-10",
      "border-solid",
      "rounded-2xl",
      "border-2",
      "border-gray-400",
      "p-4"
    );

    if (!isNaN(donationAmount) && !hasLetter) {
      div.innerHTML = `
   <p class="mb-4 text-lg font-bold"> ${donation} Taka is donated for Flood at Noakhali, Bangladesh</p>
   <small> ${new Date()} </small>
   `;
      my_modal_5.showModal();
      balanceCalculation(noakhaliBalanceAmount,donationAmount)
      /*
       document.getElementById("main-balance").innerText =
        mainBalanceAmount - donationAmount;
      document.getElementById("noakhali-balance").innerText =
        noakhaliBalanceAmount + donationAmount; 
        */

      historycontainer.appendChild(div);
    } else {
      alert("Inpute is invalide");
    }
  });
