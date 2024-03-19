import React, { useEffect } from 'react';

export const HTML: string = `<div class='hover:bg-stale-200 cursor-default'>
		Text <div>Text</div>
		<div>
			Text2 <div class='cursor-default'>Text3</div>
			<p>React long text</p>
		</div>
	</div>`;

interface HTMLRendererProps {
  html: string;
}

const parseHTML = (htmlString: string) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, 'text/html');
  return html.body.children;
};

const createReactElement = (element: Element) => {
  const { tagName, childNodes, className } = element;

  if (tagName === 'DIV') {
    const children = Array.from(childNodes)
      .map((child, index) => {
        const childElement = createReactElement(child as Element);
        return childElement ? React.cloneElement(childElement, { key: index }) : null;
      })
      .filter(Boolean);

    return (
      <div
        style={{
          border: `4px solid ${className === 'cursor-default' ? 'purple' : 'green'}`,
        }}
        className={`border p-3`}
      >
        {children}
      </div>
    );
  }

  if (tagName === 'P') {
    return (
      <div className="border-2 border-purple-200 bg-white p-3">
        {(element.textContent = 'Text')}
      </div>
    );
  }

  if (element.nodeType === Node.TEXT_NODE && element.textContent?.trim()) {
    return (
      <div className="border-2 border-orange-200 bg-white p-3">
        {(element.textContent = 'Text')}
      </div>
    );
  }

  return null;
};

const HTMLRenderer: React.FC<HTMLRendererProps> = ({ html }) => {
  const [content, setContent] = React.useState<React.ReactNode>(null);

  useEffect(() => {
    const parsedHTML = parseHTML(html);
    const reactElement = createReactElement(parsedHTML[0] as Element);
    setContent(reactElement);
  }, [html]);

  return <div className="m-5">{content}</div>;
};

export default HTMLRenderer;

//
// const END_FORM = (
// 	<div className='m-5 flex flex-col gap-3 border-2 border-indigo-200 p-3'>
// 		<div className={'flex flex-col gap-3 border-2 border-green-200 p-3'}>
// 			<div className={'border-2 border-orange-200 p-3'}>Text</div>
// 			<div className={'border-2 border-orange-200 p-3'}>Text</div>
//
// 			<div className={'flex flex-col gap-3 border-2 border-orange-200 p-3'}>
// 				<div className={'border-2 border-purple-200'}>Text</div>
// 				<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 				<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			</div>
// 		</div>
//
// 		<div className={'border-2 border-green-200 p-3'}>Text</div>
// 		<div className={'border-2 border-green-200 p-3'}>Text</div>
// 		<div className={'flex flex-col gap-3 border-2 border-green-200 p-3'}>
// 			Text
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 		</div>
// 		<div className={'flex flex-col gap-3 border-2 border-green-200 p-3'}>
// 			Text
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 			<div className={'border-2 border-purple-200 p-3'}>Text</div>
// 		</div>
// 	</div>
// );
