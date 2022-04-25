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

    let promise = Currency.exchange(
      initialCurrency,
      convertedCurrenncy,
      amount
    );

    promise
      .then(function (response) {
        let newObject = JSON.parse(response);
        console.log(newObject);
        $("#base-currency").text(
          `Your  intial currency is: ${newObject.base_code}`
        );
        $("#current-rate").text(
          `The current exchange rate is: ${newObject.conversion_rate}`
        );
        $("#total-amount").text(
          `Your total amount is: ${newObject.conversion_result} ${newObject.target_code}`
        );
      })
      .catch(function (error) {
        let errorMessage = JSON.parse(error);
        $("#error").text(
          `${errorMessage.result}: The currency code does not work make sure you enter a valid one`
        );
      });
  });
});
