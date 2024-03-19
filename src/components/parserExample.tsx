const HTMLRendererExample = ({ inputValue }: { inputValue?: string }) => {
  return <div className="m-5">{inputValue && END_FORM}</div>;
};

export default HTMLRendererExample;

const END_FORM = (
  <div className="m-5 flex flex-col gap-3 border-2 border-indigo-200 p-3">
    <div className={'flex flex-col gap-3 border-2 border-green-200 p-3'}>
      <div className={'border-2 border-orange-200 p-3'}>Text</div>
      <div className={'border-2 border-orange-200 p-3'}>Text</div>

      <div className={'flex flex-col gap-3 border-2 border-orange-200 p-3'}>
        <div className={'border-2 border-purple-200'}>Text</div>
        <div className={'border-2 border-purple-200 p-3'}>Text</div>
        <div className={'border-2 border-purple-200 p-3'}>Text</div>
      </div>
    </div>

    <div className={'border-2 border-green-200 p-3'}>Text</div>
    <div className={'border-2 border-green-200 p-3'}>Text</div>
    <div className={'flex flex-col gap-3 border-2 border-green-200 p-3'}>
      Text
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
    </div>
    <div className={'flex flex-col gap-3 border-2 border-green-200 p-3'}>
      Text
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
      <div className={'border-2 border-purple-200 p-3'}>Text</div>
    </div>
  </div>
);
