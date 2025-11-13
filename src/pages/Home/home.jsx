import { useEffect } from "react";
import Header from "../../components/Header/header"
import Introduction from "../../components/Introduction/introduction";

function Home() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <Introduction />
    </div>
  )
}

export default Home