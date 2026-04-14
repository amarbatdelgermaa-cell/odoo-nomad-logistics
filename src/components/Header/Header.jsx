import { Link } from 'react-router-dom';
import { useMainContext } from '../../Context/MainContext';

const Header = () => {
  const { user, logout, companyInfo } = useMainContext();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">🏔️ Nomad</span>
          <span className="text-2xl font-bold text-secondary">Logistics</span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-primary transition">Нүүр</Link>
          <Link to="/about" className="hover:text-primary transition">Бидний тухай</Link>
          <Link to="/services" className="hover:text-primary transition">Үйлчилгээ</Link>
          <Link to="/contact" className="hover:text-primary transition">Холбоо барих</Link>
        </div>

        <div className="flex gap-3">
          {user ? (
            <>
              <Link to="/user" className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition">
                {user.name}
              </Link>
              <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Гарах
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition">
                Нэвтрэх
              </Link>
              <Link to="/register" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-amber-600 transition">
                Бүртгүүлэх
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;