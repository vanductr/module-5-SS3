import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}, // Đối tượng lưu trữ các lỗi
    };
  }

  // Hàm kiểm tra dữ liệu và hiển thị lỗi
  validateForm = () => {
    const { username, email, password, confirmPassword } = this.state;
    const errors = {};

    // Kiểm tra username không được để trống
    if (!username.trim()) {
      errors.username = "Username không được để trống";
    }

    // Kiểm tra email có đúng định dạng không
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.email = "Email không hợp lệ";
    }

    // Kiểm tra password phải dài ít nhất 6 ký tự
    if (password.length < 6) {
      errors.password = "Password phải có ít nhất 6 ký tự";
    }

    // Kiểm tra confirmPassword phải trùng với password
    if (confirmPassword !== password) {
      errors.confirmPassword = "Password không khớp";
    }

    // Lưu các lỗi vào state
    this.setState({ errors });

    // Trả về true nếu không có lỗi, ngược lại trả về false
    return Object.keys(errors).length === 0;
  };

  // Xử lý sự kiện khi form được gửi đi
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      // Thực hiện các hành động khi form hợp lệ
      console.log("Form submitted successfully");
    } else {
      // Thực hiện các hành động khi form không hợp lệ
      console.log("Form has errors");
    }
  };

  // Xử lý sự kiện khi giá trị của các trường thay đổi
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, confirmPassword, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    );
  }
}

export default RegisterForm;
