import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@heroui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMeme } from '../../redux/memes/operations';
import toast from 'react-hot-toast';

const EditModal = ({ isOpen, onOpenChange, meme }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: meme?.title || '',
    img: meme?.img || '',
    likes: meme?.likes || 0,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (
      !formData.title ||
      formData.title.length < 3 ||
      formData.title.length > 100
    ) {
      newErrors.title = 'Title must be 3-100 characters';
    }

    const urlRegex = /^https?:\/\/.+\.(jpg|jpeg)$/i;
    if (!formData.img || !urlRegex.test(formData.img)) {
      newErrors.img = 'Image must be a valid JPG URL';
    }

    const likes = Number(formData.likes);
    if (!Number.isInteger(likes) || likes < 0 || likes > 99) {
      newErrors.likes = 'Likes must be an integer 0–99';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (isOpen) {
      localStorage.setItem('editMemeFormData', JSON.stringify(formData));
    }
  }, [formData, isOpen]);

  useEffect(() => {
    if (meme) {
      setFormData({
        title: meme.title || '',
        img: meme.img || '',
        likes: meme.likes || 0,
      });
    }
  }, [meme]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const updatedMemeData = {
      title: formData.title,
      img: formData.img,
      likes: Number(formData.likes),
    };

    dispatch(updateMeme({ id: meme.id, updatedData: updatedMemeData }))
      .unwrap()
      .then(() => {
        toast.success('Successfully updated!', {
          style: { backgroundColor: '#9be1a0', fontWeight: 'medium' },
          iconTheme: { primary: 'white', secondary: 'black' },
        });
      })
      .catch(err => {
        toast.error(err, {
          style: { backgroundColor: '#FFCCCC', fontWeight: 'medium' },
        });
      });
  };

  return (
    <Modal
      className="bg-blue-100 mx-3"
      isOpen={isOpen}
      placement="center"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1 items-center">
              Update Meme
            </ModalHeader>
            <ModalBody>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                classNames={{
                  inputWrapper:
                    'bg-white rounded-xl focus-within:shadow-blue-300',
                }}
                label="Title"
                type="text"
                variant="bordered"
                color="primary"
                isInvalid={!!errors.title}
                errorMessage={errors.title}
              />
              <Input
                name="img"
                value={formData.img}
                onChange={handleChange}
                classNames={{
                  inputWrapper:
                    'bg-white rounded-xl focus-within:shadow-blue-300',
                }}
                label="Image"
                type="text"
                variant="bordered"
                color="primary"
                isInvalid={!!errors.img}
                errorMessage={errors.img}
              />
              <Input
                name="likes"
                value={formData.likes}
                onChange={handleChange}
                classNames={{
                  inputWrapper:
                    'bg-white rounded-xl focus-within:shadow-blue-300',
                }}
                label="Likes"
                type="text"
                variant="bordered"
                color="primary"
                isInvalid={!!errors.likes}
                errorMessage={errors.likes}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleSubmit}>
                Update Meme
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
