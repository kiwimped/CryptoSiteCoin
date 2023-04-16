import React, { useState } from "react";

function Settings() {
  const [accountData, setAccountData] = useState({
    username: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    language: "en"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccountData((prevAccountData) => ({
      ...prevAccountData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (accountData.newPassword !== accountData.confirmPassword) {
      window.alert("New password and confirm password do not match!");
      return;
    }
    console.log("Account Data:", accountData);
    window.alert("Settings saved!");
    window.location.reload();
  };

  return (
    <div className="settings-form-container">
      <h2>Settings</h2>
      <form className="settings-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={accountData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={accountData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Old Password:
          <input
            type="password"
            name="oldPassword"
            value={accountData.oldPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={accountData.newPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Confirm New Password:
          <input
            type="password"
            name="confirmPassword"
            value={accountData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Language:
          <select
            name="language"
            value={accountData.language}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Save Changes" />
      </form>
    </div>
  );
}

export default Settings;
