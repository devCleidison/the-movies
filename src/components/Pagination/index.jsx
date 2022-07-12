import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

import "./style.css";

export const Pagination = ({
  pageId,
  customPagination,
  totalPages,
  categotyMovie,
}) => {
  const paginate = (symbol) => {
    if (symbol === "+" && pageId < totalPages) {
      customPagination(pageId + 1, categotyMovie);
    }

    if (symbol === "-" && pageId !== 1) {
      customPagination(pageId - 1, categotyMovie);
    }

    window.scrollTo(0, 0);
  };

  return (
    <div className="pagination">
      <button className="button" onClick={() => paginate("-")}>
        <MdOutlineNavigateBefore />
      </button>
      <div className="page">
        {pageId !== 1 && <p>...</p>}
        <div className="pagination-item">{pageId}</div>
        {pageId < totalPages && <p>...</p>}
      </div>
      <button className="button" onClick={() => paginate("+")}>
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
};
