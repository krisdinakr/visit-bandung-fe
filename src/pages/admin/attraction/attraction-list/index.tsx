import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AttractionService from 'services/attractions';
import { ADMIN_ROUTES } from 'routes';
import { Alert, Modal } from 'components';
import { NotificationType } from 'types';

const AttractionListPage = () => {
  const [attractions, setAttractions] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationType | null>(
    null
  );
  const tableCol = ['name', 'category', 'subCategory'];
  const attractionService = useMemo(() => new AttractionService(), []);

  const fetchApi = useCallback(async () => {
    setIsLoading(true);
    const result: any = await attractionService.get();
    if (result.status === 'success') {
      setAttractions(result.data);
    }
    setIsLoading(false);
  }, [attractionService]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const handleDelete = useCallback(
    async (id, name) => {
      try {
        const deleteResult: any = await attractionService.delete(id);
        console.log(deleteResult);
        if (deleteResult.status === 'success') {
          const attractionsUpdated = attractions.filter(
            (attraction) => attraction.id !== id
          );
          setAttractions(attractionsUpdated);
          setNotification({
            type: 'info',
            message: `Data ${name} successfully deleted!`,
          });
          setTimeout(() => {
            setNotification(null);
          }, 4000);
        }
      } catch (err: any) {
        console.log(err.message);
        setNotification({ type: 'error', message: err.message });
        setTimeout(() => {
          setNotification(null);
        }, 4000);
      }
    },
    [attractionService, attractions]
  );

  if (isLoading)
    return (
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ height: '70vh' }}
      >
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="mt-3">Loading...</span>
      </div>
    );

  return (
    <div>
      {notification && (
        <Alert type={notification.type} message={notification.message} />
      )}
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
                  <Link
                    className="btn py-0 me-2"
                    to={`${ADMIN_ROUTES.ATTRACTION_LIST}/${row.id}`}
                  >
                    <i className="fas fa-info-circle text-primary"></i>
                  </Link>
                  <button
                    type="button"
                    className="btn py-0"
                    data-bs-toggle="modal"
                    data-bs-target={`#deleteModal-${row.id}`}
                  >
                    <i className="fas fa-trash text-danger"></i>
                  </button>
                  <Modal
                    id={`deleteModal-${row.id}`}
                    buttonLabel="delete"
                    handleButton={() => handleDelete(row.id, row.name)}
                  >
                    <p className="text-center my-2 px-3">
                      Do you really want to delete this records? This process
                      cannot be undone.
                    </p>
                  </Modal>
                </td>
              </tr>
            ))}
          {!attractions.length && (
            <tr>
              <td className="text-center" colSpan={4}>
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
