import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
export default function Nav() {
  return(
    <nav>
      <h1>User-Info</h1>
      <ul>
        <li>
          <Link to="/">
            <p>首頁</p><FaChevronRight/>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p>關於</p><FaChevronRight/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}