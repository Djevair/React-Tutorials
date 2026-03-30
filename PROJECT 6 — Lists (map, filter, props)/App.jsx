import List from './List.jsx';
function App() {
      const fruits = [{id: 1, name : "banana", calories : 95},{id : 2,name : "apple", calories : 45},{id : 3, name : "orange", calories : 105},{id : 4, name: "coconut", calories : 159},{id : 5, name: "pineapple", calories : 37}];
  return(
    <>{fruits.length > 0 ? <List items={fruits}category="Fruits"/> : null}</>);}
export default App;
