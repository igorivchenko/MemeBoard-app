import { useSelector } from 'react-redux';
import { selectIsLoading, selectMemesData } from '../../redux/memes/selectors';
import MemeItem from '../MemeItem/MemeItem';
import { Spinner } from '@heroui/react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MemeList = () => {
  const memesData = useSelector(selectMemesData);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Spinner />}
      {memesData.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {memesData.map(meme => (
            <li key={meme._id}>
              <MemeItem meme={meme} />
            </li>
          ))}
        </ul>
      ) : (
        <ErrorMessage message={'Sorry, memes not found.'} />
      )}
    </>
  );
};

export default MemeList;
