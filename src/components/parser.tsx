import React, { useEffect, useRef } from 'react';

import HTMLRendererExample from './parserExample.tsx';

const parseHTML = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.firstChild;
};

const HTMLRenderer: React.FC<{ html: string }> = ({ html }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const parsedHTML = parseHTML(html);
      const endForm = createEndForm(parsedHTML as HTMLElement);
      containerRef.current.appendChild(endForm);
    }
  }, [html]);

  return <HTMLRendererExample inputValue={html.startsWith('<div') ? html : ''} />;
};

const createEndForm = (element: HTMLElement): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = 'flex flex-col gap-3 border-2 border-indigo-200 p-3';

  const children = Array.from(element.children);
  children.forEach((child) => {
    if (child instanceof HTMLElement) {
      if (child.tagName === 'DIV') {
        const childDiv = createChildDiv(child as HTMLElement);
        div.appendChild(childDiv);
      } else if (child.tagName === 'P') {
        const childP = createChildP(child as HTMLElement);
        div.appendChild(childP);
      }
    } else if (child instanceof Text) {
      const childText = createChildText(child.data);
      div.appendChild(childText);
    }
  });

  return div;
};

const createChildDiv = (element: HTMLElement): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = 'flex flex-col gap-3 border-2 border-green-200 p-3';

  const children = Array.from(element.children);
  children.forEach((child) => {
    if (child instanceof HTMLElement) {
      if (child.tagName === 'DIV') {
        const childDiv = createGrandchildDiv(child as HTMLElement);
        div.appendChild(childDiv);
      } else if (child.className === 'cursor-default') {
        const childDiv = createGrandchildDiv(child as HTMLElement);
        div.appendChild(childDiv);
      }
    } else if (child instanceof Text) {
      const childText = createChildText(child.data);
      div.appendChild(childText);
    }
  });

  return div;
};

const createGrandchildDiv = (element: HTMLElement): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = 'flex flex-col gap-3 border-2 border-orange-200 p-3';

  const children = Array.from(element.children);
  children.forEach((child) => {
    if (child instanceof HTMLElement) {
      if (child.className === 'cursor-default') {
        const childDiv = document.createElement('div');
        childDiv.className = 'border-2 border-purple-200';
        childDiv.textContent = child.textContent;
        div.appendChild(childDiv);
      }
    } else if (child instanceof Text) {
      const childText = createChildText(child.data);
      div.appendChild(childText);
    }
  });

  return div;
};

const createChildP = (element: HTMLElement): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = 'border-2 border-green-200 p-3';
  div.textContent = element.textContent;

  return div;
};

const createChildText = (text: string): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = 'border-2 border-orange-200 p-3';
  div.textContent = text;

  return div;
};

export default HTMLRenderer;
