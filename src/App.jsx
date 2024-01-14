import { useState } from "react";
import "./App.css";
import cardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";
import cardBack from "./assets/bg-card-back.png";

function App() {
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
                <p className="front-card-number">0000 0000 0000 0000</p>
                <p className="front-card-name">Jane Appleseed</p>
                <p className="front-card-exp">
                  <span>00</span>/<span>00</span>
                </p>
              </div>
              <div className="back-card">
                <img src={cardBack} class="back-card-img" alt="back-card" />
                <p className="back-card-cvc">000</p>
              </div>
            </div>
          </div>
          {/* card-detail-section */}
          <div className="card-detail-section">
            <form className="card-detail">
              <div className="for-input-name">
                <label for="cardholder-name">CARDHOLDER NAME</label>
                <br />
                <input
                  id="input-cardholder-name"
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  required
                />
              </div>

              <div className="for-input-number">
                <label for="card-number">CARD NUMBER</label>
                <br />
                <input
                  id="input-card-number"
                  type="text"
                  placeholder="e.g. 1234 5678 9123 0000"
                  maxLength={19}
                  required
                />
              </div>

              <div className="for-input-exp-cvc">
                <div className="for-card-date">
                  <label for="card-date">Exp. Date (MM/YY)</label>
                  <div className="two-input">
                    <div>
                      <input
                        id="input-card-month"
                        type="text"
                        placeholder="MM"
                        maxLength={2}
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
                      />
                    </div>
                  </div>
                </div>

                <div className="for-card-cvc">
                  <label for="card-cvc">CVC</label> <br />
                  <input
                    id="input-card-cvc"
                    type="text"
                    placeholder="e.g. 123"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
              <button className="for-submit" type="submit">
                Confirm
              </button>
            </form>

            {/* <div className="thank-you">
            <img src="./images/icon-complete.svg" alt="Completed" />
            <h1 className="thank-text-1">Thank you!</h1>
            <p className="thank-text-2">We've added your card details</p>
            <button class="for-continue">Continue</button>
          </div>  */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
