// src/MultiLevelDropdown.js
import React, { useState } from 'react';

const MultiLevelDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Dropdown
      </button>

      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg">
          <a
            onMouseEnter={() => setIsSubmenuOpen(true)}
            onMouseLeave={() => setIsSubmenuOpen(false)}
            href="#"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Item 1 (Hover for more)
          </a>
          {isSubmenuOpen && (
            <div className="absolute left-full top-0 mt-0 ml-1 w-48 bg-white py-2 rounded-md shadow-lg border border-gray-200">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Sub Item 1</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Sub Item 2</a>
            </div>
          )}
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Item 2</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Item 3</a>
        </div>
      )}
    </div>
  );
};

export default MultiLevelDropdown;
