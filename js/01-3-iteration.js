function checkForSpam(message) {
  let result;
  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ;
console.log(result);

  // if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
  // }
  // return result;

}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");