// src/app.js

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import WalletConnect from './components/WalletConnect';

const App = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const checkConnection = async () => {
            const connected = await WalletConnect.checkConnection();
            setIsConnected(connected);
        };
        checkConnection();
    }, []);

    const handleConnect = async () => {
        const success = await WalletConnect.connect();
        setIsConnected(success);
    };

    return (
        <div>
            <h1>Sui Wallet Connection</h1>
            {isConnected ? (
                <p>Wallet is connected!</p>
            ) : (
                <button onClick={handleConnect}>Connect Wallet</button>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));