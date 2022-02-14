let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var uName = document.getElementById("enterName").value;
   var uAmount = parseInt(document.getElementById("enterAmount").value);

   if (uAmount > 9000 & uAmount>0) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = uName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + uAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - uAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      if(document.getElementById("myAccountBalance").innerText< 0){
        alert("Insufficient Balance") }
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!
      $${uAmount} is been sent to ${uName}@gmail.com.`)

      // transaction history
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${uAmount} had been sent to recepient with Email-id ${uName}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}
