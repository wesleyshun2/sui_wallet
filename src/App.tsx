import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="connect-button-container">
                <ConnectButton />
            </div>
            <header className="App-header"></header>
            <ConnectedAccount />
        </div>
    );
}

function ConnectedAccount() {
    const account = useCurrentAccount();

    if (!account) {
        return null;
    }

    return <div>Connected to {account.address}</div>;
}

export default App;