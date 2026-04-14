import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMainContext } from '../../Context/MainContext';
import MyButton from '../../components/UI/MyButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useMainContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Нэвтрэх нэр эсвэл нууц үг буруу байна');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">Нэвтрэх</h2>
        <p className="text-center text-gray-500 mb-6">Nomad Logistics системд нэвтрэх</p>
        
        {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Имэйл</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Нууц үг</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <MyButton type="submit" className="w-full">Нэвтрэх</MyButton>
        </form>
        
        <p className="text-center mt-4 text-gray-600">
          Бүртгэлгүй юу? <Link to="/register" className="text-primary hover:underline">Бүртгүүлэх</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;