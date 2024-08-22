const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);
  const lastPage = pageNumbers[pageNumbers.length - 1]
  const firstPage = pageNumbers[0]

  return (
    <nav aria-label="Pagination">
      <hr className="my-0" />
      <ul className="pagination justify-content-center my-4">
      { currentPage == lastPage ||
        <li className="page-item"
        onClick={() => setCurrentPage(curr => lastPage > currentPage ? curr + 1 : curr)}
        >
          <a className="page-link" href="#!">
            Newer
          </a>
        </li>}
        {pageNumbers.map((num) => {
          return (
            <li
              key={num}
              onClick={() => setCurrentPage(num)}
              className={num === currentPage ? "page-item active" : "page-item"}
              aria-current="page"
            >
              <a className="page-link" href="#!">
                {num}
              </a>
            </li>
          );
        })}

        { currentPage == firstPage || <li className="page-item"
        onClick={() => setCurrentPage(curr => firstPage < currentPage ? curr - 1 : curr)}
        >
          <a className="page-link" href="#!">
            Older
          </a>
        </li>}
      </ul>
    </nav>
  );
};

export default Pagination;
