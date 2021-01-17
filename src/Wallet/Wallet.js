import React, {Component} from 'react';
import classes from './Wallet.css';
import IncomeAndExpensesList from './IncomeAndExpensesList/IncomeAndExpensesList';
import Input from './Input/Input';


class Wallet extends Component{

    state = {
        incomeList: [],
        expensesList: [],
        totalIncomeValue: 0,
        totalExpensesValue: 0,
    }

    // receives arguements from child component: IncomeAndExpensesList.js
    deleteItem = (type, index) => {
        //console.log("inside deleteItem() [Wallet.js]");
        //console.log(type, index);
        let itemList = [];
        let totalValue;
        if(type === "expense"){
            totalValue = this.state.totalExpensesValue - this.state.expensesList[index].amount;
            itemList = this.state.expensesList.filter(item => item !== this.state.expensesList[index]);
            this.setState({expensesList: itemList, totalExpensesValue: totalValue});
        } else{
            totalValue = this.state.totalIncomeValue - this.state.incomeList[index].amount;
            itemList = this.state.incomeList.filter(item => item !== this.state.incomeList[index]);
            this.setState({incomeList: itemList, totalIncomeValue: totalValue});
        }

    }
    
    addItem = (type, description, value) => {
        console.log("Add button clicked: [Wallet.js]");
        //console.log(type, description, value);
        const item = {title: description, amount: parseFloat(value)};
        let itemList = []
        let currentTotal;
        if(type === "Expense"){
            currentTotal = this.state.totalExpensesValue + item.amount;
            itemList = [...this.state.expensesList];
            itemList.push(item);
            this.setState({
                expensesList: itemList,
                totalExpensesValue: currentTotal,
            })
        } else{
            currentTotal = this.state.totalIncomeValue + item.amount;
            itemList = [...this.state.incomeList];
            itemList.push(item);
            this.setState({
                incomeList: itemList,
                totalIncomeValue: currentTotal,
            });
        }

    }

    render(){
        return (
            <div className={classes.Wallet}>
                <h4>Practice Problem 3 (Wallet)</h4>
                <div className={classes.Top}>
                    <div className={classes.Income}>
                        <div className={classes.IncomeText}>Total Income</div>
                        <div className={classes.Right}>
                            <span className={classes.TotalIncomeValue}>${this.state.totalIncomeValue.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className={classes.Expenses}>
                        <div className={classes.ExpensesText}>Total Expenses</div>
                        <div className={classes.Right}>
                            <span className={classes.TotalExpensesValue}>${this.state.totalExpensesValue.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className={classes.Bottom}>
                    <Input onAddButtonClick={this.addItem}/>
                    <IncomeAndExpensesList
                        onChildClick={this.deleteItem}
                        incomeList={this.state.incomeList}
                        expensesList={this.state.expensesList}
                    />
                </div>
            </div>
        )
    }
}

export default Wallet;

// I wanted make two components, income and expenses components.