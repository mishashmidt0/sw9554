import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

import { cn } from '../lib/utils.ts';

const parseHTML = (htmlString: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.children;
};
type HTMLTreeProps = {
  html: string;
};

type RenderNodeProps = {
  level: number;
  index: number;
  node: any;
};
const HTMLTree = ({ html }: HTMLTreeProps) => {
  const [expanded, setExpanded] = useState({});
  const handleToggle = (id: string) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id as keyof typeof prevState],
    }));
  };

  const renderNode = ({ node, level, index }: RenderNodeProps) => {
    node.id = index;
    const isExpanded = expanded[node.id as keyof typeof expanded] || false;

    const nodeClasses = `mb-1  border-l-2 ${
      isExpanded ? 'border-blue-500' : 'border-transparent'
    }`;

    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();
      const attrs = Array.from(node.attributes)
        .map((attr: any) => `${attr.name}="${attr.value}"`)
        .join(' ');
      const children = Array.from(node.childNodes).map((child, i) =>
        renderNode({ node: child, level: level + 1, index: Number(index + '0' + i) }),
      );

      return (
        <div
          key={node.id}
          className={nodeClasses}
          style={{ paddingLeft: `${(1 + level) * 3}px` }}
        >
          <button
            onClick={() => handleToggle(node.id)}
            className="flex items-center focus:outline-none"
          >
            {node.childNodes.length > 0 && (
              <ArrowUp
                className={cn(
                  ' transition text-gray-600 mr-2',
                  isExpanded ? 'rotate-180' : '',
                )}
              />
            )}
            <span className="mr-1 text-blue-500">{`<${tagName}`}</span>
            {attrs && <span className="text-gray-600">{` ${attrs}`}</span>}
            <span className="ml-1 text-blue-500">{`/>`}</span>
          </button>
          {isExpanded && <div>{children}</div>}
        </div>
      );
    }

    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      return (
        <div key={node.id} className={nodeClasses}>
          <span className={'ml-1'}>{node.textContent.trim()}</span>
        </div>
      );
    }

    return null;
  };

  const nodes = parseHTML(html);

  return (
    <div className="mt-10 space-y-2 rounded-md border border-gray-300 p-4">
      {Array.from(nodes).map((node, index) => renderNode({ node, level: 0, index }))}
    </div>
  );
};

export default HTMLTree;
