function connectWallet() {
  var btn = document.getElementById("btn-auth");
  const neoline = new NEOLine.Init();
  neoline
    .getAccount()
    .then((account) => {
      const { address, label, isLedger } = account;
      console.log(account);
      swal("Success", "Wallet Successfully Connected!", "success");
      btn.innerHTML = label;
    })
    .catch((error) => {
      const { type, description, data } = error;
      switch (type) {
        case "NO_PROVIDER":
          console.log("No provider available.");
          swal("Info", "No provider available.", "info");
          break;
        case "CONNECTION_DENIED":
          console.log(
            "The user rejected the request to connect with your dApp"
          );
          swal(
            "Error",
            "The user rejected the request to connect with your dApp",
            "error"
          );
          break;
        default:
          swal("Error", error, "error");
          console.error(error);
          break;
      }
    });
}

function uploadBtn() {
    const neoline = new NEOLine.Init();
    var btn = document.getElementById("btn-auth");
    if(btn.innerHTML == "Get Started"){
        neoline
    .getAccount()
    .then((account) => {
      const { address, label, isLedger } = account;
      console.log(account);
      swal("Success", "Wallet Successfully Connected!", "success");
      btn.innerHTML = label;
    })
    .catch((error) => {
      const { type, description, data } = error;
      switch (type) {
        case "NO_PROVIDER":
          console.log("No provider available.");
          swal("Info", "No provider available.", "info");
          break;
        case "CONNECTION_DENIED":
          console.log(
            "The user rejected the request to connect with your dApp"
          );
          swal(
            "Error",
            "The user rejected the request to connect with your dApp",
            "error"
          );
          break;
        default:
          swal("Error", error, "error");
          console.error(error);
          break;
      }
    });
    }
    else{
        window.location.href = "./upload.html";
    }
}

