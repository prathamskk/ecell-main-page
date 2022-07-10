const button = document.getElementById("submitbtn");
button.addEventListener("click", handleClick);
console.log(button);
function handleClick() {
  const token = grecaptcha.getResponse();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const submitbtn = document.getElementById("submitbtn");
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    alert("Enter Valid Email");
    return;
  }

  if (
    token.length === 0 ||
    name.length === 0 ||
    message.length === 0
  ) {
    console.log("empty");
    alert("Fill the form");
    return;
  } else {
    submitbtn.disabled = true;
    submitbtn.innerHTML = "<div class='loader'></div>"
    // console.log(token);
    fetch(
      "https://zbba6bfl4k.execute-api.ap-south-1.amazonaws.com/dev/contact/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          token: token,
        }),
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        submitbtn.disabled = false;
        submitbtn.innerHTML = "Submit";
        alert(JSON.stringify(data.message));
      });
  }
}
