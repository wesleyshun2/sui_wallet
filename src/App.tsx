import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ConnectButton />
            </header>

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