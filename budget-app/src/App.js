
import './App.css';
import React, {useState, useEffect} from 'react';
import Income from '../src/components/Income';
import Expense from '../src/components/Expense'
import Navbar from "./components/Navbar";

function App() {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpenditure, setTotalExpenditure] = useState(0);
    const [remainingIncome, setRemainingIncome] = useState(0);
    const [percentageExpended, setPercentageExpended] = useState(0);

    // Calculate total income
    useEffect(() => {
        let total = 0;
        incomes.forEach(
            (income) =>
                (total += income.amount)
        );
        setTotalIncome(total);

            total = 0;
            expenses.forEach(
                (expense) =>
                    (total += expense.amount)
            );
            setTotalExpenditure(total);

        // Calculate remaining income
        setRemainingIncome(totalIncome - totalExpenditure);

// Calculate percentage expended
        if (totalIncome !== 0) {
            setPercentageExpended(
                (totalExpenditure / totalIncome) * 100
            );
        }
    }, [incomes, expenses, totalIncome, totalExpenditure]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const addIncome = (income) => {
        // Add the income and reset expenses for each income
        setIncomes([...incomes, income]);
        setExpenses([]);
    };


    return (
        <div>
            <Navbar/>
        <div className="App">
            <h1>Piggy</h1>
            <div className="tracker-container">
                <Expense onAddExpense={addExpense} />
                <Income onAddIncome={addIncome} />
            </div>
        </div>
        </div>
    );
}
export default App;
