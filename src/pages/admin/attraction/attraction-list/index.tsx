import { useCallback, useEffect, useState } from 'react';
import AttractionService from 'services/attractions';

const AttractionListPage = () => {
  const [attractions, setAttractions] = useState<Array<any> | null>(null);
  const tableCol = ['name', 'category', 'subCategory'];

  const fetchApi = useCallback(async () => {
    const attractionService = new AttractionService();
    const result: any = await attractionService.get();
    if (result.status === 'success') {
      setAttractions(result.data);
    }
  }, []);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-primary">
            {tableCol.map((col) => (
              <th key={col}>{col.toUpperCase()}</th>
            ))}
            <th key="action">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {attractions &&
            attractions.map((row) => (
              <tr key={row.id}>
                {tableCol.map((col) => (
                  <td key={`${row.id}_${col}`}>{row[col]}</td>
                ))}
                <td key={`${row.id}_action`}>
                  <button type="button" className="btn py-0 me-2">
                    <i className="fas fa-info-circle text-primary"></i>
                  </button>
                  <button type="button" className="btn py-0">
                    <i className="fas fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))}
          {!attractions && (
            <tr>
              <td className="text-center" colSpan={tableCol.length}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AttractionListPage;
