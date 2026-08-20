import type React from "react";
import { Link } from "react-router-dom";

export interface Crumb {
  label: string;
  path?: string;
}

const Breadcrumb: React.FC<{ items: Crumb[] }> = ({ items }) => (
  <nav aria-label="breadcrumb" className="mb-6 text-sm">
    <ol className="flex flex-wrap items-center gap-1.5 text-gray-500">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
            {idx > 0 && <span className="text-gray-300" aria-hidden="true">/</span>}
            {isLast || !item.path ? (
              <span className="text-gray-700 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-violet-600 hover:underline transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
