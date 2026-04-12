import React from 'react';
import Icon from '../ui/Icon';

interface BreadcrumbItem {
  id: string | null;
  name: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onItemClick: (index: number) => void;
}

export default function Breadcrumb({ items, onItemClick }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {items.map((item, index) => (
        <React.Fragment key={item.id || 'root'}>
          <button
            onClick={() => onItemClick(index)}
            className={`text-sm ${index === items.length - 1 ? 'font-semibold text-gray-900 dark:text-white' : 'text-blue-600 dark:text-blue-400 hover:underline'}`}
          >
            {item.name}
          </button>
          {index < items.length - 1 && (
            <Icon name="sort" size={16} className="text-gray-400 flex-shrink-0 transform rotate-90" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
