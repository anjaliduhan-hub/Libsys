import './Expenses.scss';
import ExpenseDate from './ExpenseDate';
import './Card.js'


function Expenses(props){

    return (
        
        <Card className = "Expense">
        <ExpenseDate></ExpenseDate>
        <div className = "Expense__description">
        <h1>{props.ExpenseTitle}</h1>
        <div className = "Expense__amount">${props.ExpenseAmount}</div>
        </div>
        </Card>
      
    );
    }
export default Expenses;