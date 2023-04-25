import React from "react";

export const Register = () => {
  return (
    <div>
      REGISTER
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>Send</button>
      </form>
    </div>
  );
};
