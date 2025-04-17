import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from '@heroui/react';
import { useSelector } from 'react-redux';
import { selectMemesData } from '../../redux/memes/selectors';

const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'title',
    label: 'TITLE',
  },
  {
    key: 'img',
    label: 'IMAGE',
  },
  {
    key: 'likes',
    label: 'LIKES',
  },
];

const MemeTable = () => {
  const memesData = useSelector(selectMemesData);

  const mappedData = memesData.map(({ _id, ...rest }) => ({
    id: _id,
    ...rest,
  }));

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map(column => (
          <TableColumn
            key={column.key}
            className="text-sm w-[200px] text-center"
          >
            {column.label}
          </TableColumn>
        ))}

        <TableColumn key="actions" className="text-sm w-[50px] text-center">
          ACTIONS
        </TableColumn>
      </TableHeader>
      <TableBody items={mappedData}>
        {item => (
          <TableRow key={item._id}>
            {columnKey =>
              columnKey === 'actions' ? (
                <TableCell className="text-center">
                  <Button isIconOnly aria-label="Like" color="warning">
                    <svg width="20" height="20">
                      <use href="../../../icons.svg#icon-edit-icon"></use>
                    </svg>
                  </Button>
                </TableCell>
              ) : (
                <TableCell className="text-center break-words max-w-[200px]">
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )
            }
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default MemeTable;
