function Hamburger({isOpen}) {
  const currentRoute = window.location.pathname;
  
  return (
    <div className="hamburger w-8 h-8 flex justify-around flex-col z-10">
        <div className={`burger burger1 ${isOpen ? 'open' : ''}`} />
        <div className={`burger burger2 ${isOpen ? 'open' : ''}`} />
        <div className={`burger burger3 ${isOpen ? 'open' : ''}`} />
    </div>     
  );
}

export default Hamburger;