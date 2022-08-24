//Template string
function print(firstName){
  console.log(`Hello ${firstName}`);
}
print("Isabelle");

function createEmail(firstName1, price){
  let shipping = 5.95;
  console.log(`Hi ${firstName}! Thanks! Total: ${price} Shiping: ${shipping}
  Grand Total: $${price + shipping}`);
}
createEmail("Guy", 100);