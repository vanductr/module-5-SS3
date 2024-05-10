// ========================= SESSION 3 : LifeCycle trong ReactJS ===========================

// ========================== Thực hành 1: LifeCycle =======================================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     console.log('Component mounted');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component updated');
//   }

//   componentWillUnmount() {
//     console.log('Component unmounted');
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button>
//       </div>
//     );
//   }

// }


// ========================== Thực hành 2: LifeCycle =======================================
// import React, { Component } from 'react'
// import Counter from './lifecycle_getDerivedStateFromProps/Counter'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }


// ========================== Thực hành 3: LifeCycle =======================================
// import React, { Component } from 'react'
// import Counter from './lifecycle_shouldComponentUpdate/Counter'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }


// ========================== Thực hành 4: LifeCycle =======================================
// import React, { Component } from 'react'
// import Counter from './componentDidUpdate_Lifecycle/Counter'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }


// ========================== Thực hành 5: LifeCycle - Thực hành tổng hợp các phương thức trong Lifecycle =======================================

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: 0,
//     };

//     this.setNewNumber = this.setNewNumber.bind(this);
//   }

//   setNewNumber() {
//     this.setState({ data: this.state.data + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.setNewNumber}>INCREMENT</button>


//         <Content myNumber={this.state.data}></Content>
//       </div>
//     );
//   }
// }

// class Content extends React.Component {
//   componentWillMount() {
//     console.log("Component WILL MOUNT!");
//   }

//   componentDidMount() {
//     console.log("Component DID MOUNT!");
//   }

//   componentWillReceiveProps(newProps) {
//     console.log("Component WILL RECIEVE PROPS!");
//   }

//   shouldComponentUpdate(newProps, newState) {
//     return true;
//   }

//   componentWillUpdate(nextProps, nextState) {
//     console.log("Component WILL UPDATE!");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component DID UPDATE!");
//   }

//   componentWillUnmount() {
//     console.log("Component WILL UNMOUNT!");
//   }

//   render() {
//     return (
//       <div>
//         <h3>{this.props.myNumber}</h3>
//       </div>
//     );
//   }
// }

// export default App;


// ========================== Thực hành 6: Xử lý form trong ReactJS =======================================

// import React, { Component } from 'react'
// import ContactForm from './demo_form_handling/ContactForm'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <ContactForm/>
//       </div>
//     )
//   }
// }


// ========================== Bài tập 1: Tạo Form Register và Login có Validate =======================================
import React, { Component } from 'react'
import RegisterForm from './baitap1/RegisterForm'
import LoginForm from './baitap1/LoginForm'

export default class App extends Component {
  render() {
    return (
      <div>
        <RegisterForm/>

        <LoginForm/>
      </div>
    )
  }
}
