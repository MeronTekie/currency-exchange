export default class Currency {
  static exchange(initialCurrency, convertedCurrenncy, amount) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https:v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${initialCurrency}/${convertedCurrenncy}/${amount}`;
      request.open("GET", url, true);
      request.send();
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          console.log(request.response);
          reject(request.response);
        }
      };
    });
  }
}
