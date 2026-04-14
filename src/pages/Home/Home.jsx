import { Link } from 'react-router-dom';
import MyButton from '../../components/UI/MyButton';

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-amber-50 to-stone-100 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-4">
            Nomad <span className="text-primary">Logistics</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Монгол дахь хамгийн найдвартай ачаа тээврийн үйлчилгээ
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register">
              <MyButton size="lg">Үйлчилгээ захиалах</MyButton>
            </Link>
            <Link to="/about">
              <MyButton variant="outline" size="lg">Дэлгэрэнгүй</MyButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Бидний давуу талууд</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Хурдан хүргэлт", desc: "24/7 үйлчилгээ, цаг хугацаанд хүргэлт" },
              { title: "Найдвартай", desc: "Туршлагатай жолооч, шинэ техник" },
              { title: "Хямд үнэ", desc: "Өрсөлдөхүйц үнэ, уян хатан хөнгөлөлт" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;