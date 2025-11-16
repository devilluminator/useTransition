import React from 'react';
import UseTransitionDemo from './UseTransitionDemo';

const App: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>React useTransition Hook Example</h1>
            <p>Tab switching with data fetching using useTransition hook</p>

            <UseTransitionDemo />
        </div>
    );
};

export default App;