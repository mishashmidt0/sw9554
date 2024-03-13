import { WalletContent } from './el/WalletContent.tsx';
import { WalletHeader } from './el/WalletHeader.tsx';
import { WalletNavigation } from './el/WalletNavigation.tsx';
export interface WalletProps {
  onClose: () => void;
}
export const Wallet = ({ onClose }: WalletProps) => {
  return (
    <div className={'h-full bg-gradient-to-t from-blue-300'}>
      <WalletHeader onClose={onClose} />
      <div className={'h-full space-y-4 rounded-t-3xl bg-white p-6'}>
        <WalletNavigation />
        <WalletContent />
      </div>
    </div>
  );
};
