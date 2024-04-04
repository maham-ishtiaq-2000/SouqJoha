import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="flex flex-wrap text-gray-700 text-sm lg:text-base">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="mx-1 lg:mx-2 mt-1 text-xs lg:text-sm">➤</span> // Separator with responsive margin and size
          )}
          <a
            href={item.href}
            className={`${
              index !== 0 && index !== items.length - 1 ? 'bg-gray-200' : ''
            } hover:text-gray-900 px-1 lg:px-2 py-1 rounded whitespace-nowrap`}
          >
            {item.text}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
