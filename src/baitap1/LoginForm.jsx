import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {}, // Đối tượng lưu trữ các lỗi
    };
  }

  // Hàm kiểm tra dữ liệu và hiển thị lỗi
  validateForm = () => {
    const { username, password } = this.state;
    const errors = {};

    // Kiểm tra username không được để trống
    if (!username.trim()) {
      errors.username = "Username không được để trống";
    }

    // Kiểm tra password không được để trống
    if (!password.trim()) {
      errors.password = "Password không được để trống";
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
    const { username, password, errors } = this.state;

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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    );
  }
}

export default LoginForm;
