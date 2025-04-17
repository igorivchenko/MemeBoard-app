import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  useDisclosure,
} from '@heroui/react';
import { useSelector } from 'react-redux';
import { selectMemesData } from '../../redux/memes/selectors';
import EditModal from '../EditModal/EditModal';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedMeme, setSelectedMeme] = useState(null);

  const mappedData = memesData.map(({ _id, ...rest }) => ({
    id: _id,
    ...rest,
  }));

  return (
    <>
      {mappedData.length === 0 ? (
        <ErrorMessage message={'Sorry, memes not found.'} />
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-2 md:hidden text-center">
            ↔️ Scroll to view all columns
          </p>
          <Table aria-label="Responsive Table">
            <TableHeader>
              {columns.map(column => (
                <TableColumn
                  key={column.key}
                  className="text-sm w-[200px] text-center"
                >
                  {column.label}
                </TableColumn>
              ))}
              <TableColumn
                key="actions"
                className="text-sm w-[50px] text-center"
              >
                ACTIONS
              </TableColumn>
            </TableHeader>
            <TableBody items={mappedData}>
              {item => (
                <TableRow key={item._id}>
                  {columnKey =>
                    columnKey === 'actions' ? (
                      <TableCell className="text-center">
                        <Button
                          isIconOnly
                          aria-label="Like"
                          color="warning"
                          onPress={() => {
                            setSelectedMeme(item);
                            onOpen();
                          }}
                        >
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
        </>
      )}
      <EditModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        meme={selectedMeme}
      />
    </>
  );
};

export default MemeTable;
