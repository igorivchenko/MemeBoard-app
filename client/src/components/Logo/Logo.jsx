import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="flex items-center gap-2" to="/">
      <svg width="24" height="24">
        <use href="../../../icons.svg#icon-Troll-Face"></use>
      </svg>
      <p className="text-xl font-bold text-inherit leading-normal">MemeBoard</p>
    </Link>
  );
};

export default Logo;
