import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs.tsx';
import { WalletActivityLists } from './WalletActivityLists.tsx';
import { WalletTokensList } from './WalletTokensList.tsx';

export const WalletContent = () => {
  return (
    <div>
      <Tabs defaultValue="tokens" className="w-full">
        <TabsList className={'w-full'}>
          <TabsTrigger value="tokens">Tokens</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="tokens">
          <WalletTokensList />
        </TabsContent>
        <TabsContent value="activity">
          <WalletActivityLists />
        </TabsContent>
      </Tabs>
    </div>
  );
};
