
import Expenses from './components/Expenses';

function App() {

  const arr = [
    {
      ExpenseTitle:'Education',
      ExpenseAmount:100
    },
    {
      ExpenseTitle:'Insurance',
      ExpenseAmount:300
    },
    {
      ExpenseTitle:'Entertainment',
      ExpenseAmount:1000
    }
  ]

  return (
    <div>
    <h1>HEY THERE</h1>
    {arr.map(x => {
        return <Expenses {...x}></Expenses>
      })}
    </div>
  );
}

export default App;
