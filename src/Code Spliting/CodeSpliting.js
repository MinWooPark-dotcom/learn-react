export default function greeting() {
  alert("Hi, default");
}

//! default 없이 export만
// export function greeting2() {
//   alert("Hi, export");
// }

//! 자바스크립트 함수 코드 스플리팅
// import React from "react";

// const App = () => {
//   const onClick = () => {
//     import("./Code Spliting/CodeSpliting").then((result) => result.default());
//   };

//   const onClick2 = () => {
//     import("./Code Spliting/CodeSpliting").then((result) =>
//       console.log(result)
//     );
//   };

//   return (
//     <>
//       <div onClick={onClick}>Click me! This is default version</div>;
//       <div onClick={onClick2}>Click me! This is export version</div>;
//     </>
//   );
// };

// export default App;

//! React.lazy, Suspense
// import React, { useState, Suspense } from "react";
// const Lazy = React.lazy(() => import("./Code Spliting/CodeSpliting"));

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   const onClick = () => {
//     setVisible(true);
//   };

//   return (
//     <div>
//       <div onClick={onClick}>Click Me!</div>
//       <Suspense fallback={<div>loading...</div>}>
//         {visible && <Lazy />}
//       </Suspense>
//     </div>
//   );
// };

// export default App;
