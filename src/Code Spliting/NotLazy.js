import React from "react";

const NotLazy = () => {
  return <div>NotLazy</div>;
};

export default NotLazy;

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     NotLazy: null,
//   };
//   handleClick = async () => {
//     const loadedModule = await import("./Code Spliting/NotLazy");
//     this.setState({
//       NotLazy: loadedModule.default,
//     });
//     // console.log(this.state.NotLazy);
//   };
//   render() {
//     const { NotLazy } = this.state;
//     return (
//       <div>
//         <div onClick={this.handleClick}>Click me!</div>
//         {NotLazy && <NotLazy />}
//       </div>
//     );
//   }
// }

// export default App;
