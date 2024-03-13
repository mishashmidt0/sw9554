import { ArrowDown, ArrowDownUp, ArrowUp } from 'lucide-react';

import { Button } from '../../ui/button.tsx';

export const WalletNavigation = () => {
  return (
    <div className={'space-y-4'}>
      <div className={'flex justify-between'}>
        <Button>
          <div className={'mr-2 rounded-full bg-white p-1'}>
            <ArrowUp className={'size-3 text-blue-500'} />
          </div>
          Deposit
        </Button>
        <Button variant={'secondary'}>
          <div className={'mr-2 rounded-full bg-blue-500 p-1'}>
            <ArrowDown className={'size-3 text-white'} />
          </div>
          Send
        </Button>
        <Button variant={'secondary'}>
          <div className={'mr-2 rounded-full bg-blue-500 p-1'}>
            <ArrowDownUp className={'size-3 text-white'} />
          </div>
          Buy
        </Button>
      </div>

      <Button className={'w-full'}>
        <div className={'mr-2 rounded-full bg-white p-1'}>
          <ArrowUp className={'size-3 text-blue-500'} />
        </div>
        Buy DFC
      </Button>
    </div>
  );
};
