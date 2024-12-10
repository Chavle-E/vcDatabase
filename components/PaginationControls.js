const PaginationControls = ({ currentPage, totalPages, onPageChange, entriesPerPage, setEntriesPerPage }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      {/* Entries Per Page Selector */}
      <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(parseInt(e.target.value))} className="select select-bordered">
        <option value={20}>Show 20 contacts</option>
        <option value={50}>Show 50 contacts</option>
        <option value={100}>Show 100 contacts</option>
      </select>

      {/* Pagination Buttons */}
      <div className="flex space-x-2">
        <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className="btn btn-secondary">Back</button>
        <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} className="btn btn-secondary">Next</button>
      </div>
    </div>
  );
};

export default PaginationControls;