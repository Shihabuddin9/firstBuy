import './PlaceOrder.css'
const PlaceOrder = () => {
    return (
        <div>
            <div className="container">
                <h1>Shipping</h1>
                <p>Please enter your shipping details.</p>
                <hr />
                <div className="form">

                    <div className="fields fields--2">
                        <label className="field">
                            <span className="field__label" htmlFor="firstname">First name</span>
                            <input className="field__input" type="text" id="firstname" value="John" />
                        </label>
                        <label className="field">
                            <span className="field__label" htmlFor="lastname">Last name</span>
                            <input className="field__input" type="text" id="lastname" value="Doe" />
                        </label>
                    </div>
                    <label className="field">
                        <span className="field__label" htmlFor="address">Address</span>
                        <input className="field__input" type="text" id="address" />
                    </label>
                    <label className="field">
                        <span className="field__label" htmlFor="country">Country</span>
                        <select className="field__input" id="country">
                            <option value=""></option>
                            <option value="unitedstates">United States</option>
                        </select>
                    </label>
                    <div className="fields fields--3">
                        <label className="field">
                            <span className="field__label" htmlFor="zipcode">Zip code</span>
                            <input className="field__input" type="text" id="zipcode" />
                        </label>
                        <label className="field">
                            <span className="field__label" htmlFor="city">City</span>
                            <input className="field__input" type="text" id="city" />
                        </label>
                        <label className="field">
                            <span className="field__label" htmlFor="state">State</span>
                            <select className="field__input" id="state">
                                <option value=""></option>
                            </select>
                        </label>
                    </div>
                </div>
                <hr />
                <button className="button">Continue</button>
            </div>
        </div>
    );
};

export default PlaceOrder;