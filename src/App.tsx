import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// part 1 import
import { ConnectButton } from '@mysten/dapp-kit';

// part 2 import
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


// part 1 使用所有设置好的 Providers
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ConnectButton />
            </header>
        </div>
    );
}

// part 2 现在你已经让用户连接他们的钱包
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