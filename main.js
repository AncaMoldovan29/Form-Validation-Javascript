// Exercitiul 1

function prime(nr) {
  for (var i = 2; i < nr; i++) {
    if (nr % i == 0) return false;
  }
  return nr > 1;
}
let numere = [2, 7, 5, 8, 9, 10, 15, 11, 13, 19];
for (let nr of numere) {
  if (prime(nr)) {
    console.log(`${nr} este prim`);
  } else console.log(`${nr} nu este prim`);
}

// Exercitiul 2

let sir = "abcdshlkaweoiuiiwue";
function isVowel(ch) {
  ch = ch.toUpperCase();
  return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
}
function vocale(sir) {
  var count = 0;
  for (var i = 0; i < sir.length; i++) if (isVowel(sir[i])) ++count;
  return "Sirul dat are " + count + " vocale.";
}
console.log(vocale(sir));

// Exercitiul 3

function handleForm(event) {
  let name = document.getElementById("name").value;
  let password = document.getElementById("passw").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;

  if (name.length <= 3) {
    alert("you MUST have at least 3 characters");
    event.preventDefault();
    return;
  }
  if (password.search(/[0-9]/) < 0) {
    alert("Your password must contain at least one digit.");
    event.preventDefault();
    return;
  }

  if (age < 16) {
    alert("You must be at least 16 years old");
    event.preventDefault();
    return;
  }
  if (!email.endsWith(".ro")) {
    alert("Your email must end with .ro");
    event.preventDefault();
    return;
  }
}
