import React, { useState } from 'react';
import Display from './Display';
import { calculate } from '../utils/calculations';
import './Calculator.css';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                const calculatedResult = calculate(input);
                setResult(calculatedResult);
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(prev => prev + value);
        }
    };

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <div className="buttons">
                {['7', '8', '9', '/', 'C', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((button) => (
                    <button key={button} onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;