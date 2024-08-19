
const Pagination = () => {
    return (
      <nav aria-label="Pagination">
                          <hr className="my-0" />
                          <ul className="pagination justify-content-center my-4">
                              <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Newer</a></li>
                              <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                              <li className="page-item"><a className="page-link" href="#!">2</a></li>
                              <li className="page-item"><a className="page-link" href="#!">3</a></li>
                              <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                              <li className="page-item"><a className="page-link" href="#!">15</a></li>
                              <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                          </ul>
                      </nav>
    )
  }
  
  export default Pagination