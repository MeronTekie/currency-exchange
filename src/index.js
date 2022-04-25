import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Currency from "./currency-exchange";

$(document).ready(function () {
  $("#currency-exchange").submit(function (event) {
    event.preventDefault();
    let amount = parseInt($("#amount").val());
    let initialCurrency = $("#baseCurrency").val();
    let convertedCurrenncy = $("#convertedCurrency").val();
    console.log(amount, initialCurrency, convertedCurrenncy);

    let promise = Currency.exchange(
      initialCurrency,
      convertedCurrenncy,
      amount
    );

    promise
      .then(function (response) {
        let newObject = JSON.parse(response);
        console.log(newObject.conversion_result);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
});
