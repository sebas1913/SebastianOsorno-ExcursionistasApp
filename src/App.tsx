import React from 'react';
import OptimalSolution from './components/OptimalSolution';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <h1 className="mt-4 mb-4 fw-bold display-4 text-primary text-center">Software para excursionistas</h1>
            <div className="container col-md-6">
                <OptimalSolution />
            </div>
        </div>
    );
}

export default App;
