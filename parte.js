function togglePricing() {
    const basicPrice = document.getElementById("basic-price");
    const standardPrice = document.getElementById("standard-price");
    const premiumPrice = document.getElementById("premium-price");
  
    if (basicPrice.innerHTML.includes("/mês")) {
      basicPrice.innerHTML = "R$ 299/ano";
      standardPrice.innerHTML = "R$ 499/ano";
      premiumPrice.innerHTML = "R$ 999/ano";
    } else {
      basicPrice.innerHTML = "R$ 29/mês";
      standardPrice.innerHTML = "R$ 49/mês";
      premiumPrice.innerHTML = "R$ 99/mês";
    }
  }
  