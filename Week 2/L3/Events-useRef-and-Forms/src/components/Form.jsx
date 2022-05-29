import React, { useState, useEffect } from "react";

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    isMarried: "",
    gender: "",
    resume: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, [name]: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    console.log(form);
    setForm({
      username: "",
      email: "",
      password: "",
      age: "",
      isMarried: "",
      gender: "",
      resume: "",
      state: "",
    });
  };

  return loading ? (
    <div>
      <h1>Form Successfully Submitted</h1>
    </div>
  ) : (
    <div>
      <h3>Form</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label>
          <input
            onChange={handleChange}
            type="text"
            value={form.username}
            name="username"
            placeholder="Enter username..."
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter email..."
            required
          />
        </div>
        <br />

        <div>
          <label>Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter password..."
          />
        </div>
        <br />
        <div>
          <label>Age</label>
          <input
            onChange={handleChange}
            name="age"
            type="number"
            value={form.age}
            placeholder="Enter age..."
          />
        </div>
        <br />
        <div>
          <label>Married</label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="isMarried"
            checked={form.isMarried}
          />
        </div>
        <br />
        <div>
          <select onChange={handleChange} name="state" value={form.state}>
            <option value="delhi">Delhi</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="panjab">Panjab</option>
            <option value="goa">Goa</option>
          </select>
        </div>
        <br />
        <div>
          <input
            type="radio"
            onChange={handleChange}
            name="gender"
            value="Male"
          />
          <label>male</label>
        </div>
        <div>
          <input
            type="radio"
            onChange={handleChange}
            name="gender"
            value="female"
          />
          <label>Female</label>
        </div>
        <br />
        <div>
          <label>Resume</label>
          <input
            type="file"
            name="resume"
            files={form.resume}
            onChange={handleChange}
          />
        </div>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
