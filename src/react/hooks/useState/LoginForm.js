/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";

/**
 * LoginForm using object
 * @returns {*}
 * @constructor
 */
export default function LoginForm() {
  const [form, setValues] = useState({
    username: '',
    password: ''
  });

  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input
          value={form.username}
          name="username"
          onChange={updateField}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
