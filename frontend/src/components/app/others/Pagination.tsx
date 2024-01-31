import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
  numbers: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  prevPage,
  nextPage,
  numbers,
}) => {
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <a
            href="#"
            className="page-link"
            onClick={prevPage}>
            Prev
          </a>
        </li>
        {numbers.map((n, i) => (
          <li
            className={` ${currentPage === n ? 'active' : ''}`}
            key={i}>
            <a
              href="#"
              className="page-link"
              onClick={() => onPageChange(n)}>
              {n}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="page-link"
            onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
