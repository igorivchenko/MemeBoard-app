import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMemes } from '../../redux/memes/operations';
import { selectIsLoading } from '../../redux/memes/selectors';
import MemeList from '../../components/MemeList/MemeList';
import { Spinner } from '@heroui/react';

const MemesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllMemes());
  }, [dispatch]);

  return (
    <section className="py-8">
      <div className="max-w-[1264px] px-4 mx-auto md:px-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <Spinner />
          </div>
        ) : (
          <MemeList />
        )}
      </div>
    </section>
  );
};

export default MemesPage;
