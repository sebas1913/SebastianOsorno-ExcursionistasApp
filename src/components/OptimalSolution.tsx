import React, { useState } from 'react';
import { Button, Form, Alert, ListGroup } from 'react-bootstrap';
import { IElement, IResult } from '../interfaces/Index';
import { selectOptimalElements } from '../utils/elements';
import elementsData from '../data/elements.json';

const OptimalSolution: React.FC = () => {
    const [minCalories, setMinCalories] = useState<number>(15);
    const [maxWeight, setMaxWeight] = useState<number>(10);
    const [result, setResult] = useState<IResult | null>(null);

    const handleCalculate = () => {
        const res = selectOptimalElements(elementsData as IElement[], minCalories, maxWeight);
        setResult(res);
    };

    return (
        <div>
            <Form>
                <Form.Group controlId="minCalories" className="mb-2">
                    <Form.Label className='fw-semibold'>Mínimo de Calorías</Form.Label>
                    <Form.Control
                        type="number"
                        value={minCalories}
                        onChange={(e) => setMinCalories(Number(e.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId="maxWeight" className="mb-2">
                    <Form.Label className='fw-semibold'>Peso Máximo</Form.Label>
                    <Form.Control
                        type="number"
                        value={maxWeight}
                        onChange={(e) => setMaxWeight(Number(e.target.value))}
                    />
                </Form.Group>
                <Button variant="primary" className="w-100 mt-3 fw-bolder" onClick={handleCalculate}>
                    Calcular solución
                </Button>
            </Form>

            {result ? (
                <Alert variant="success" className="mt-3 p-4 rounded-3 border border-success">
                    <Alert.Heading className="fw-bold text-success">✅ Solución óptima</Alert.Heading>
                    <hr />
                    <p className="mb-2">
                        <strong>Total Peso:</strong> {result.totalWeight}
                    </p>
                    <p className="mb-2">
                        <strong>Total Calorías:</strong> {result.totalCalories}
                    </p>
                    <p className="mb-0">
                        <strong>Elementos:</strong> {result.elements.map(el => el.id).join(', ')}
                    </p>
                </Alert>
            ) : (
                <Alert variant="danger" className="mt-3 p-4 rounded-3 border border-danger">
                    <Alert.Heading className="fw-bold text-danger">❌ No se encontró una solución válida</Alert.Heading>
                </Alert>
            )}


        </div>
    );
};

export default OptimalSolution;
