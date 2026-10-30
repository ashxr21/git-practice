const Card = ({ title }) => {
  return(
    <div>
      <h2>{title}</h2>
    </div>

  );
}
function App(){
    return(
      <div>
        <h2>Functional Arrow Component</h2>

        <Card title = "No Country for Old men"/>        
        <Card title = "The Godfather"/>
        <Card title = "Pulp Fiction"/>
        <Card title = "Pride and Prejudice"/>
        <Card title = "There will be Blood"/>
      </div>
    );
}

export default App;
