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

  const handleSubmit = () => {
    setConfirmed(true);
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
                    required
                  />
                </div>

                <div className="for-input-number">
                  <label htmlFor="card-number">CARD NUMBER</label>
                  <br />
                  <input
                    id="input-card-number"
                    type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    maxLength={19}
                    value={cardNumber
                      .replace(/\D/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(event) => {
                      setCardNumber(event.target.value);
                    }}
                    required
                  />
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
                          value={expMonth.replace(/\D/g, "")}
                          onChange={(event) => {
                            setExpMonth(event.target.value);
                          }}
                          required
                        />
                      </div>
                      <div>
                        <input
                          id="input-card-year"
                          type="text"
                          placeholder="YY"
                          required
                          maxLength={2}
                          value={expYear.replace(/\D/g, "")}
                          onChange={(event) => {
                            setExpYear(event.target.value);
                          }}
                        />
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
                      value={cvc.replace(/\D/g, "")}
                      onChange={(event) => {
                        setCvc(event.target.value);
                      }}
                      required
                    />
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
