//! common function cor amount calculation
function balanceCalculation(donationProject, donated,localUpdateField){
  const mainBalance = document.getElementById("main-balance").innerText;
  const mainBalanceAmount = parseFloat(mainBalance);
  document.getElementById("main-balance").innerText =
  mainBalanceAmount - donated;
document.getElementById(localUpdateField).innerText =
donationProject + donated;
}


//! go to blog / QnA
document.getElementById('blog').addEventListener('click',function(){
  window.location.href='/faq.html'
})

/* //! go back to home page
document.getElementById('back-to-home').addEventListener('click',function(){
  window.location.href='/index.html'
  console.log('object');
}) */


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

    if (!isNaN(donationAmount) && !hasLetter && donationAmount>0) {
      div.innerHTML = `
   <p class="mb-4 text-lg font-bold"> ${donation} Taka is donated for Flood at Noakhali, Bangladesh</p>
   <small> ${new Date()} </small>
   `;
      my_modal_5.showModal();
      balanceCalculation(noakhaliBalanceAmount,donationAmount,'noakhali-balance')
      historycontainer.appendChild(div);
      document.getElementById("input-donate-noakhali").value='';
    } else {
      alert("Inpute is invalide");
    }
  });

//! Feni donation
  document
  .getElementById("btn-donate-now-feni")
  .addEventListener("click", function () {
    const donation = document.getElementById("input-donate-feni").value;
    const donationAmount = parseFloat(donation); //! add
    const hasLetter = /[a-zA-Z]/.test(donation);
    //! main
    const feniBalance =
      document.getElementById("feni-balance").innerText;
    const feniBalanceAmount = parseFloat(feniBalance);
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

    if (!isNaN(donationAmount) && !hasLetter && donationAmount>0) {
      div.innerHTML = `
   <p class="mb-4 text-lg font-bold"> ${donation} Taka is donated for Flood relief in Feni, Bangladesh</p>
   <small> ${new Date()} </small>
   `;
      my_modal_5.showModal();
      balanceCalculation(feniBalanceAmount,donationAmount,'feni-balance')
      historycontainer.appendChild(div);
      document.getElementById("input-donate-feni").value='';
    } else {
      alert("Inpute is invalide");
    }
  });


  //! Quota Injured donation
  document
  .getElementById("btn-donate-now-quota")
  .addEventListener("click", function () {
    const donation = document.getElementById("input-donate-quota").value;
    const donationAmount = parseFloat(donation); //! add
    const hasLetter = /[a-zA-Z]/.test(donation);
    //! main
    const quotaBalance =
      document.getElementById("quota-balance").innerText;
    const quotaBalanceAmount = parseFloat(quotaBalance);
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




    if (!isNaN(donationAmount) && !hasLetter && donationAmount>0) {
      div.innerHTML = `
   <p class="mb-4 text-lg font-bold"> ${donation} Taka is Donated for Aid for injured in the Quota Movement, Bangladesh</p>
   <small> ${new Date()} </small>
   `;
      my_modal_5.showModal();
      balanceCalculation(quotaBalanceAmount,donationAmount,'quota-balance')
      historycontainer.appendChild(div);
      document.getElementById("input-donate-quota").value='';
    } else {
      alert("Inpute is invalide");
    }
  });