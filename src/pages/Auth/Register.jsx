import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyButton from '../../components/UI/MyButton';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Нууц үг таарахгүй байна');
      return;
    }
    // API дуудах
    navigate('/login');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">Бүртгүүлэх</h2>
        <p className="text-center text-gray-500 mb-6">Nomad Logistics-д бүртгүүлэх</p>
        
        {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Нэр</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Имэйл</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Нууц үг</label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Нууц үг баталгаажуулах</label>
            <input type="password" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <MyButton type="submit" className="w-full">Бүртгүүлэх</MyButton>
        </form>
        
        <p className="text-center mt-4 text-gray-600">
          Бүртгэлтэй юу? <Link to="/login" className="text-primary hover:underline">Нэвтрэх</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;