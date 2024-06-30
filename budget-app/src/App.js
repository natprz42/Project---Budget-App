import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Income from '../src/components/Income';

function App() {
    const [incomes, setIncomes] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpenditure, setTotalExpenditure] = useState(0);
    const [remainingIncome, setRemainingIncome] = useState(0);

    // Calculate total income
    useEffect(() => {
        let total = 0;
        incomes.forEach(
            (income) =>
                (total += income.amount)
        );
        setTotalIncome(total);

        // Calculate remaining income
        setRemainingIncome(totalIncome - totalExpenditure);

    const addIncome = (income) => {
        // Add the income and reset expenses for each income
        setIncomes([...incomes, income]);
    };

    return (
        <div className="Dashboard">
            <h1>Piggy</h1>
            <div className="tracker-container">
                <Income onAddIncome={addIncome} />
            </div>
        </div>
    );
}
)}
export default App;
