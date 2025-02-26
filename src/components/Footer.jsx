
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <p className="logo-text">Kafa<span>Tech</span></p>
        </div>
        <div className="copy-right">
          <p>&copy; {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;