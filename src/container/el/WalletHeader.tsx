import { CircleEllipsis } from 'lucide-react';

import { WalletProps } from '../Wallet.tsx';
type WalletHeaderProps = WalletProps;
export const WalletHeader = ({ onClose }: WalletHeaderProps) => {
  return (
    <div>
      <div className={'flex items-center justify-between p-2'}>
        <button className={'text-blue-500'} onClick={onClose}>
          Cancel
        </button>

        <div className={'flex flex-col items-center'}>
          <p className={'font-medium'}>DeWallet</p>
          <p className={'text-sm font-light text-neutral-400'}>bot</p>
        </div>

        <button>
          <CircleEllipsis className={'text-blue-500'} />
        </button>
      </div>

      <div className={'my-8 flex flex-col items-center justify-center gap-1'}>
        <p className={'text-4xl font-medium'}>
          $2,934<span className={'text-2xl text-neutral-400/80'}>.32</span>
        </p>
        <p className={'font-light text-neutral-400'}>TjkLk...5FGs</p>
      </div>
    </div>
  );
};
