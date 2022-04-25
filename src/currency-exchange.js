export default class Currency {
  static exchange(initialCurrency, convertedCurrenncy, amount) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https:v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${initialCurrency}/${convertedCurrenncy}/${amount}`;
      // let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/enriched/${initialCurrency}?${convertedCurrenncy}?${amount}`;
      request.open("GET", url, true);
      request.send();
      console.log(request.response);
      request.onload = function () {
        if (this.status === 200) {
          // console.log(request.response);
          // console.log(request.response);
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
    });
  }
}
