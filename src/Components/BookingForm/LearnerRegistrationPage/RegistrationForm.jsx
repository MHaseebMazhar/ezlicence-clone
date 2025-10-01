import React from 'react';

const RegistrationForm = () => {
    return (
        <div className="registration-form">
            <h2>Enter your details</h2>

            {/* Who are you registering for? */}
            <section className="form-section">
                <h3>Who are you registering for?</h3>
                <div className="radio-group">
                    <label className="radio-label">
                        <input type="radio" name="registration-for" value="myself" defaultChecked />
                        Myself
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="registration-for" value="someone-else" />
                        Someone else <span className="helper-text">(e.g. child, partner, grandchild, other)</span>
                    </label>
                </div>
            </section>

            {/* Pick up details */}
            <section className="form-section">
                <h3>Please enter your pick up details</h3>
                <div className="form-row single-field">
                    <label htmlFor="pickup-address">Pick up address</label>
                    <input type="text" id="pickup-address" placeholder="Enter a location" className="full-width-input primary-input" />
                </div>
                <div className="form-row three-fields">
                    <div className="form-field required">
                        <label htmlFor="postcode">Postcode</label>
                        <select id="postcode">
                            <option>Enter your postcode</option>
                        </select>
                    </div>
                    <div className="form-field required">
                        <label htmlFor="country">Country</label>
                        <select id="country">
                            <option>Please select</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Personal details */}
            <section className="form-section">
                <h3>Please provide your personal details</h3>
                <div className="form-row two-fields">
                    <div className="form-field required">
                        <label htmlFor="first-name">First name</label>
                        <input type="text" id="first-name" />
                    </div>
                    <div className="form-field required">
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" id="last-name" />
                    </div>
                </div>
                <div className="form-row two-fields">
                    <div className="form-field required">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" />
                        <p className="field-info">We use your email to send lesson confirmation details</p>
                    </div>
                    <div className="form-field required">
                        <label htmlFor="phone-number">Phone number</label>
                        <input type="tel" id="phone-number" value="07400 000000" />
                        <p className="field-info">For instructor to contact at lesson pick up if needed</p>
                    </div>
                </div>
                <div className="form-row date-of-birth">
                    <div className="form-field required">
                        <label>Date of Birth</label>
                        <div className="dob-fields">
                            <select><option>1</option></select>
                            <select><option>October</option></select>
                            <select><option>2009</option></select>
                        </div>
                    </div>
                    <div className="form-field required">
                        <label htmlFor="best-describes">Which best describes you?</label>
                        <select id="best-describes">
                            <option>Please select</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Learning dashboard */}
            <section className="form-section">
                <h3>Choose a password for your learning dashboard</h3>
                <p className="field-info">Your dashboard allows you to make, manage & view bookings online 24/7.</p>
                <div className="form-row two-fields">
                    <div className="form-field required">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                            <span>🔑</span>
                            <input type="password" id="password" />
                        </div>
                    </div>
                    <div className="form-field required">
                        <label htmlFor="confirm-password">Password confirmation</label>
                        <div className="input-with-icon">
                            <span>🔑</span>
                            <input type="password" id="confirm-password" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Checkboxes */}
            <div className="checkbox-group">
                <label className="checkbox-label">
                    <input type="checkbox" />
                    I agree to receive occasional marketing communications and offers from EzLicence.
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" />
                    I agree to the <a href="/" className="link">Learner Driver Terms & Conditions</a>
                </label>
            </div>
        </div>
    );
};

export default RegistrationForm;