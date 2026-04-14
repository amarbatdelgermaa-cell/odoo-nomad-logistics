import { useMainContext } from '../../Context/MainContext';

const Footer = () => {
  const { companyInfo } = useMainContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">{companyInfo.name}</h3>
            <p className="text-gray-300 text-sm">Монголын найдвартай ачаа тээврийн компани</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Холбоо барих</h4>
            <p className="text-gray-300 text-sm">{companyInfo.phone}</p>
            <p className="text-gray-300 text-sm">{companyInfo.email}</p>
            <p className="text-gray-300 text-sm">{companyInfo.address}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Цагийн хуваарь</h4>
            <p className="text-gray-300 text-sm">Даваа - Баасан: 09:00 - 18:00</p>
            <p className="text-gray-300 text-sm">Бямба: 10:00 - 15:00</p>
            <p className="text-gray-300 text-sm">Ням: Амарна</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          © {currentYear} {companyInfo.name}. Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </div>
    </footer>
  );
};

export default Footer;