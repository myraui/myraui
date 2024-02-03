'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getHeadings, Heading } from '@/components/table-of-contents/get-headings';
import { usePathname, useRouter } from 'next/navigation';

function getActiveElement(rects: DOMRect[]) {
  if (rects.length === 0) {
    return -1;
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc;
      }

      return {
        index,
        position: item.y,
      };
    },
    { index: 0, position: rects[0].y }
  );

  return closest.index;
}

export const TableOfContents: React.FC<TableOfContentsProps> = (props) => {
  const [active, setActive] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const headingsRef = useRef<Heading[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const filteredHeadings = headings.filter((heading) => heading.depth > 1);

  const handleScroll = () => {
    setActive(getActiveElement(headingsRef.current.map((d) => d.getNode().getBoundingClientRect())));
  };

  useEffect(() => {
    const _headings = getHeadings();
    headingsRef.current = _headings;
    setHeadings(_headings);
    setActive(getActiveElement(_headings.map((d) => d.getNode().getBoundingClientRect())));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = filteredHeadings.map((heading, index) => (
    <a
      key={heading.id}
      href={`#${heading.id}`}
      onClick={(event) => {
        event.preventDefault();
        router.replace(`${pathname}#${heading.id}`);
      }}
    >
      {heading.content}
    </a>
  ));

  return (
    <div>
      <div>
        <h2>Table of contents</h2>
        <div>{items}</div>
      </div>
    </div>
  );
};

interface TableOfContentsProps {}
