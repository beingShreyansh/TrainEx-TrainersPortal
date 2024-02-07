// SortableHeaderCell.js
import React from "react";

const SortableHeaderCell = ({ field, currentSort, handleSort, children }) => {
  const handleClick = () => {
    handleSort(field);
  };

  return (
    <div  className="sort-filter-cell" onClick={handleClick}>
  
      {children} {field === currentSort.field && currentSort.order === "asc" ? <span>▲ </span>: <span>▼</span>}
    </div>
  );
};

export default SortableHeaderCell;
