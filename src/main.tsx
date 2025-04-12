import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//part 1 import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//part 2 import
//import { SuiClientProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// part 3 import
import '@mysten/dapp-kit/dist/index.css';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
//import { getFullnodeUrl } from '@mysten/sui.js/client';
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//part 1 第一个要设置的 Provider 是来自 @tanstack/react-query 的 QueryClientProvider
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
);

// part 2 接下来，设置 SuiClientProvider。
const queryClient = new QueryClient();
const networks = {
    devnet: { url: getFullnodeUrl('devnet') },
    mainnet: { url: getFullnodeUrl('mainnet') },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <SuiClientProvider networks={networks} defaultNetwork="devnet">
                <App />
            </SuiClientProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);

//part 3 设置来自 @mysten/dapp-kit 的 WalletProvider，并导入 dapp-kit 组件的样式
const queryClient = new QueryClient();
const networks = {
    devnet: { url: getFullnodeUrl('devnet') },
    mainnet: { url: getFullnodeUrl('mainnet') },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <SuiClientProvider networks={networks} defaultNetwork="devnet">
                <WalletProvider>
                    <App />
                </WalletProvider>
            </SuiClientProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);