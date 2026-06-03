import { Link } from "react-router-dom";

const TestNavbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-background/90 z-[99999] px-4 py-3 shadow-md">
    <div className="flex items-center gap-6">
      <Link to="/" className="text-white no-underline" onClick={() => console.log('TestNavbar: Home clicked')}>Home</Link>
      <Link to="/portfolio" className="text-white no-underline" onClick={() => console.log('TestNavbar: Portfolio clicked')}>Portfolio</Link>
      <Link to="/services" className="text-white no-underline" onClick={() => console.log('TestNavbar: Services clicked')}>Services</Link>
      <Link to="/pricing" className="text-white no-underline" onClick={() => console.log('TestNavbar: Pricing clicked')}>Pricing</Link>
      <Link to="/contact" className="text-white no-underline" onClick={() => console.log('TestNavbar: Contact clicked')}>Contact</Link>
      <Link to="/client-login" className="text-white no-underline" onClick={() => console.log('TestNavbar: Client Login clicked')}>Client Login</Link>
      <Link to="/start-project" className="text-white no-underline" onClick={() => console.log('TestNavbar: Start Project clicked')}>Start Project</Link>
    </div>
  </nav>
);

export default TestNavbar;
