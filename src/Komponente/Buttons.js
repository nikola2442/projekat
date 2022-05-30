import React from "react";
export const Buttons = () => {
    return(
        <div>
            <form >
        <div className="form-control">
          <label htmlFor="amount">Kolicina</label>
          <input type="number" placeholder="unesi kolicinu..." />
        </div>
        <button className="btn">Dodaj</button>
      </form>
        </div>
    );
}