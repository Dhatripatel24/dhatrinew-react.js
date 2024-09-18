

// // export default Counter;
// // Counter.jsx
// import React from 'react';
// import CounterValue from './CounterValue';
// import CounterButtons from './CounterButtons';


// const Counter = () => {
//   return (
//     <div>
//       <CounterValue />
//       <CounterButtons/>
//     </div>
//   );
// };

// export default Counter;
// Counter.jsx
import React from 'react';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButtons';


const Counter = () => {
  return (
    <div className="counter-container" >
      <CounterValue />
      <CounterButtons />
    </div>
  );
};

export default Counter;
