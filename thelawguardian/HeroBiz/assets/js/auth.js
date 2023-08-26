function connectWallet() {
  var btn = document.getElementById("btn-auth");
//   neologin.getAccount().then(({ address }) => {
//     console.log(address);
//     btn.innerHTML = address;
//     // btn.attribute.disabled = true;
//   });
    const neoline = new NEOLine.Init();
    neoline.getAccount()
    .then(account => {console.
        log(account)
        var name = account.label;
        var addr = account.address;
        btn.innerHTML = name;
    })
    
}
