import { useState } from 'react';

import { Wallet } from '../container/Wallet.tsx';
import BottomSheet from '../ui/bottom-sheet.tsx';
import { Button } from '../ui/button.tsx';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        'flex h-screen flex-col items-center justify-center bg-gradient-to-t from-blue-300'
      }
    >
      <Button onClick={() => setOpen(true)}>Open My Wallet</Button>
      <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
        <Wallet onClose={() => setOpen(false)} />
      </BottomSheet>
    </div>
  );
}

export default App;
