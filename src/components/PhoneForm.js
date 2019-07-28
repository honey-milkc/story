import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '', 
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      // name: e.target.value
      [e.target.name]: e.target.value // Computed property names라는 문법 
    })
  }

  handleSumit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    if (this.state.name !== '' && this.state.phone !== '') {
      // 상태값을 onCreate를 통하여 부모에게 전달
      this.props.onCreate(this.state);
      // 상태 초기화
      this.setState({
        name: '',
        phone: ''
      });
    } else {
      alert("이름과 전화번호를 입력해주세요!");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSumit}>
        <input
          placeholder="이름"
          value={this.state.namm}
          onChange={this.handleChange} // input text 값이 변경될 때마다 발생하는 이벤트.
          name="name" // input을 구분하는 방법. event.target.name이 된다.
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <div>{this.state.name} {this.state.phone}</div>
        <button type="submit">등록</button>
      </form>
    ); 
  }
}

export default PhoneForm;