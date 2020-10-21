import React from "react";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { FormatBoldRounded } from "@material-ui/icons";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal {basket.length} items:
              <strong> {` ${value}`} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
