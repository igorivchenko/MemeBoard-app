import { Link } from 'react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';

const NotFoundPage = () => {
  return (
    <div className="p-5">
      <Link
        to="/"
        className="fixed top-5 left-5 flex items-center gap-1 text-inherit w-[200px] text-lg no-underline text-center transition-colors duration-300 hover:text-red-500"
      >
        <FaArrowLeftLong />
        HomePage
      </Link>
      <img
        className="fixed top-0 left-0 w-screen h-screen object-contain -z-10"
        src="/images/NotFound.png"
        alt="404 Not Found"
      />
    </div>
  );
};

export default NotFoundPage;
