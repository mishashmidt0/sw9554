export const WalletActivityLists = () => {
  return (
    <div className={'space-y-2 overflow-y-auto pt-4'}>
      <p>October</p>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className={'flex gap-4'}>
          <div className={'size-10 rounded-full bg-blue-400'} />

          <div>
            <p className={'font-medium'}>Withdraw</p>
            <p className={'text-sm text-neutral-400'}>To TjkLk...5FGs</p>
          </div>

          <div className={'ml-auto text-end'}>
            <p className={'font-medium'}>-9 TON</p>
            <p className={'text-sm text-neutral-400'}>19 Oct 18:03</p>
          </div>
        </div>
      ))}
    </div>
  );
};
