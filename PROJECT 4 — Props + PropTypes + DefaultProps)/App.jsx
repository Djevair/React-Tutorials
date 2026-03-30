import Student from './Students.jsx';
function App() {
  return(
    <>
      <Student name="Dzeko" age={23} isStudent={false}/>      
      <Student name="BroCode" age={25} isStudent={true}/>      
      <Student name="Test" age={34} isStudent={true}/>     
    </>
  );
  
}
export default App
