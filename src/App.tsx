import { Home } from './pages/Home';
import { About } from './pages/About';
import { Router, Link } from '@reach/router';
import 'tailwindcss/tailwind.css';

export function App() {
  return (
    <div>
      <nav>
        <Link to='/home'>Home</Link> | <Link to='about'>About</Link>
      </nav>
      <Router>
        <Home path='/home' />
        <About path='/about' />
      </Router>
    </div>
  );
}
