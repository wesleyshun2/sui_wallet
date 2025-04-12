import React, { useState, useEffect } from 'react';
import { connect, disconnect, getWalletAddress } from 'sui-sdk'; // Adjust the import based on the actual Sui SDK methods

const WalletConnect = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');

    const handleConnect = async () => {
        try {
            await connect();
            const address = await getWalletAddress();
            setWalletAddress(address);
            setIsConnected(true);
        } catch (error) {
            console.error('Connection failed:', error);
        }
    };

    const handleDisconnect = async () => {
        try {
            await disconnect();
            setWalletAddress('');
            setIsConnected(false);
        } catch (error) {
            console.error('Disconnection failed:', error);
        }
    };

    useEffect(() => {
        const checkConnection = async () => {
            const address = await getWalletAddress();
            if (address) {
                setWalletAddress(address);
                setIsConnected(true);
            }
        };
        checkConnection();
    }, []);

    return (
        <div>
            {isConnected ? (
                <div>
                    <p>Connected: {walletAddress}</p>
                    <button onClick={handleDisconnect}>Disconnect</button>
                </div>
            ) : (
                <button onClick={handleConnect}>Connect Wallet</button>
            )}
        </div>
    );
};

export default WalletConnect;