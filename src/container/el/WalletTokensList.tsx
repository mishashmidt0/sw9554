export const WalletTokensList = () => {
  return (
    <div className={'space-y-2 overflow-y-auto pt-4'}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={'flex gap-4'}>
          <div className={'size-10 rounded-full bg-amber-400'} />

          <div>
            <p className={'font-medium'}>1,253 TON</p>
            <p className={'text-sm text-neutral-400'}>Toncoin</p>
          </div>

          <div className={'ml-auto font-medium'}>$2,889.32</div>
        </div>
      ))}
    </div>
  );
};
