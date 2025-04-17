import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MemeTable from '../../components/MemeTable/MemeTable';
import { fetchAllMemes } from '../../redux/memes/operations';

const TablePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMemes());
  });

  return (
    <>
      <MemeTable />
    </>
  );
};

export default TablePage;
