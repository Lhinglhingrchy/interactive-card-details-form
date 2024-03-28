import { useState } from "react";
import "./App.css";
import cardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";
import cardBack from "./assets/bg-card-back.png";
import complete from "./assets/icon-complete.svg";

function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorCardNumber, setErrorCardNumber] = useState("");
  const [errorExpMonth, setErrorExpMonth] = useState("");
  const [errorExpYear, setErrorExpYear] = useState("");
  const [errorCvc, setErrorCvc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cardName === "") {
      setErrorName("Please enter your card name");
    } else {
      setErrorName("");
    }

    if (cardNumber === "") {
      setErrorCardNumber("Please enter your card number");
    } else if (cardNumber.replace(/\D/g, "").length !== 16) {
      setErrorCardNumber("Please enter a valid 16-digit card number");
      return;
    } else {
      setErrorCardNumber("");
    }

    if (expMonth === "") {
      setErrorExpMonth("Can't be blank");
    } else {
      setErrorExpMonth("");
    }

    if (expYear === "") {
      setErrorExpYear("Can't be blank");
    } else {
      setErrorExpYear("");
    }

    if (cvc === "") {
      setErrorCvc("Can't be blank");
    } else {
      setErrorCvc("");
    }

    if (
      cardName.trim() !== "" &&
      cardNumber.replace(/\D/g, "").length === 16 &&
      expMonth.trim() !== "" &&
      expYear.trim() !== "" &&
      cvc.trim() !== ""
    ) {
      setConfirmed(true);
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="card-section">
            <div className="card">
              <div className="front-card">
                <img
                  src={cardFront}
                  className="front-card-img"
                  alt="front-card"
                />
                <img src={cardLogo} className="front-logo-img" />
                {cardNumber === "" ? (
                  <p className="front-card-number">0000 0000 0000 0000</p>
                ) : (
                  <p className="front-card-number">{cardNumber}</p>
                )}

                {cardName === "" ? (
                  <p className="front-card-name">Jane Appleseed</p>
                ) : (
                  <p className="front-card-name">{cardName}</p>
                )}
                <p className="front-card-exp">
                  {expMonth === "" ? <span>00</span> : <span>{expMonth}</span>}/
                  {expYear === "" ? <span>00</span> : <span>{expYear}</span>}
                </p>
              </div>
              <div className="back-card">
                <img src={cardBack} className="back-card-img" alt="back-card" />
                {cvc === "" ? (
                  <p className="back-card-cvc">000</p>
                ) : (
                  <p className="back-card-cvc">{cvc}</p>
                )}
              </div>
            </div>
          </div>
          {/* card-detail-section */}
          <div className="card-detail-section">
            {!confirmed && (
              <form className="card-detail" onSubmit={handleSubmit}>
                <div className="for-input-name">
                  <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                  <br />
                  <input
                    id="input-cardholder-name"
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    value={cardName}
                    onChange={(event) => {
                      setCardName(event.target.value);
                    }}
                    style={{
                      border: errorName
                        ? "2px solid red"
                        : "1px solid hsl(279, 6%, 55%, 0.5)",
                    }}
                  />
                  {errorName && <p className="error-message">{errorName}</p>}
                </div>

                <div className="for-input-number">
                  <label htmlFor="card-number">CARD NUMBER</label>
                  <br />
                  <input
                    id="input-card-number"
                    type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    maxLength={19}
                    value={cardNumber}
                    onChange={(event) => {
                      const value = event.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{4})/g, "$1 ")
                        .trim();
                      setCardNumber(value);
                    }}
                    style={{
                      border: errorCardNumber
                        ? "2px solid red"
                        : "1px solid hsl(279, 6%, 55%, 0.5)",
                    }}
                  />
                  {errorCardNumber && (
                    <p className="error-message">{errorCardNumber}</p>
                  )}
                </div>

                <div className="for-input-exp-cvc">
                  <div className="for-card-date">
                    <label htmlFor="card-date">Exp. Date (MM/YY)</label>
                    <div className="two-input">
                      <div>
                        <input
                          id="input-card-month"
                          type="text"
                          placeholder="MM"
                          maxLength={2}
                          value={expMonth}
                          onChange={(event) => {
                            setExpMonth(event.target.value.replace(/\D/g, ""));
                          }}
                          style={{
                            border: errorExpMonth
                              ? "2px solid red"
                              : "1px solid hsl(279, 6%, 55%, 0.5)",
                          }}
                        />
                        {errorExpMonth && (
                          <p className="error-message">{errorExpMonth}</p>
                        )}
                      </div>
                      <div>
                        <input
                          id="input-card-year"
                          type="text"
                          placeholder="YY"
                          maxLength={2}
                          value={expYear}
                          onChange={(event) => {
                            setExpYear(event.target.value.replace(/\D/g, ""));
                          }}
                          style={{
                            border: errorExpYear
                              ? "2px solid red"
                              : "1px solid hsl(279, 6%, 55%, 0.5)",
                          }}
                        />
                        {errorExpYear && (
                          <p className="error-message">{errorExpYear}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="for-card-cvc">
                    <label htmlFor="card-cvc">CVC</label> <br />
                    <input
                      id="input-card-cvc"
                      type="text"
                      placeholder="e.g. 123"
                      maxLength={3}
                      value={cvc}
                      onChange={(event) => {
                        setCvc(event.target.value.replace(/\D/g, ""));
                      }}
                      style={{
                        border: errorCvc
                          ? "2px solid red"
                          : "1px solid hsl(279, 6%, 55%, 0.5)",
                      }}
                    />
                    {errorCvc && <p className="error-message">{errorCvc}</p>}
                  </div>
                </div>
                <button className="for-submit" type="submit">
                  Confirm
                </button>
              </form>
            )}

            {confirmed && (
              <div className="thank-you">
                <div>
                  <img src={complete} alt="Completed" />
                </div>
                <div className="thank-text">
                  <div className="thank-text-1">THANK YOU!</div>
                  <p className="thank-text-2">We've added your card details</p>
                </div>
                <button
                  className="for-continue"
                  onClick={() => {
                    setConfirmed(false);
                    setCardName("");
                    setCardNumber("");
                    setExpMonth("");
                    setExpYear("");
                    setCvc("");
                  }}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
