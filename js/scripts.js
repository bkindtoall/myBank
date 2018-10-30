//Business Logic
function BankAccount(name, initialDep, depositAmt, withdrawal) {
  this.name = name,
  this.initialDep = initialDep,
  this.depositAmt = depositAmt,
  this.withdrawal = withdrawal,
  this.balance = []
}
BankAccount.prototype.accountActivity = function(deposit, withdrawal) {
  this.depositAmt.push(deposit);
  this.withdrawal.push(withdrawal);
console.log(BankAccount)
}

BankAccount.prototype.balance = function() {
  this.balance.push(deposit-withdrawal)
}





// User Interface Logic ---------
$(document).ready(function() {
  $("form#myBank").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDep = parseInt($("input#initialDep").val());
    var inputtedDepositAmt = parseInt($("input#depositAmt").val());
    var inputtedWithdrawal = parseInt($("input#withdrawal").val());
    // $("input#name").val("");
    // $("input#initialDep").val("");
    // $("input#depositAmt").val("");
    // $("input#withdrawal").val("");

var newBankAccount = new BankAccount(inputtedName, inputtedInitialDep, inputtedDepositAmt, inputtedWithdrawal);
console.log(newBankAccount);
  });
});
