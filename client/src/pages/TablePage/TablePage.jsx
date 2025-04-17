import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemeTable from '../../components/MemeTable/MemeTable';
import { fetchAllMemes } from '../../redux/memes/operations';
import { selectIsLoading } from '../../redux/memes/selectors';
import { Spinner } from '@heroui/react';
import { resetMemes } from '../../redux/memes/slice';

const TablePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(resetMemes());
    dispatch(fetchAllMemes());
  }, [dispatch]);

  return (
    <>
      <section className="pt-8">
        <div className="max-w-[1264px] px-4 mx-auto md:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <Spinner />
            </div>
          ) : (
            <MemeTable />
          )}
        </div>
      </section>
    </>
  );
};

export default TablePage;
