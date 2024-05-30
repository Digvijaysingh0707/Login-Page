import React, { useState } from "react";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const validateInput = (value) => {
    if (/^\d/.test(value)) {
      // Starts with a digit, validate as phone number
      validatePhone(value);
    } else if (/^[a-zA-Z]/.test(value)) {
      // Starts with a letter, validate as email
      validateEmail(value);
    }
  };

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(value)) {
      setInputError("Please enter a valid 10-digit phone number.");
      setFormValid(false);
    } else {
      setInputError("");
      setFormValid(true);
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setInputError("Please enter a valid email address.");
      setFormValid(false);
    } else {
      setInputError("");
      setFormValid(true);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    if (value?.length > 0) validateInput(value);
    else if (value?.length == 0) {
      setInputError("");
      setFormValid(true);
    }
  };

  const handleSubmit = () => {
    if (formValid && !inputError) {
      alert("All good");
      setInputValue("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Dashboard</h2>
        <form>
          <div className="form-group">
            <label htmlFor="input">Email or Mobile Number:</label>
            <input
              type="text"
              id="input"
              name="input"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter phone number or email"
            />
            {inputError && <span className="error-message">{inputError}</span>}
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!formValid || inputError || inputValue?.length == 0}
          >
            Next
          </button>
        </form>
        <div className="separator">or</div>
        <button className="google-button">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
          />
          Sign in with Google
        </button>
        <p className="help-text">
          Need help? <a href="#">Contact Us</a>
        </p>
        <p className="footer-text">
          Protected by reCAPTCHA. Google
          <a href="#">Privacy Policy</a> & <a href="#">Terms of Service</a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
