import React from 'react';
import classes from './IncomeAndExpensesList.css';
import Item from './Item/Item';

const incomeAndExpensesList = (props) =>{

    const incomeList = [...props.incomeList];
    const expensesList = [...props.expensesList];

    const incomeComponents = incomeList.map( (income, index) =>{
        return (
            <Item 
                type="Income"
                title={income.title}
                amount={income.amount.toFixed(2)}
                key={income.title.split(' ').join('')}
                clicked={() => {handleClick("income", index)}}
            />
        )
    })

    const expenseComponents = expensesList.map((expense, index) =>{
        return (
            <Item 
                type="Expense"
                title={expense.title}
                amount={expense.amount.toFixed(2)}
                key={expense.title.split(' ').join('')}
                clicked={() => handleClick("expense", index)}
            />
        )
    })

    // mechanism to pass arguments to deleteItem() method in Wallet.js
    const handleClick = (type, index) => {
        props.onChildClick(type, index);
    }

    return (
        <div className={classes.IncomeAndExpensesList}>
            <h3 className={classes.IncomeListTitle}>List of Income</h3><br/><br/><br/>
            {incomeComponents}

            <h3 className={classes.ExpensesListTitle}>List of Expenses</h3><br/><br/><br/>
            {expenseComponents}
        </div>
    )
}

export default incomeAndExpensesList;