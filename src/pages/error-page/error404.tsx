import { Link } from 'react-router-dom';

import Footer from '../../components/footer/footer';

export const Error404 = () => (
  <div className="error">
    <h1>Страница не найдена</h1>
    <p>
      <Link to={'/'}>Вернуться на главную страницу</Link>
    </p>
    <Footer />
  </div>
);

export default Error404;
