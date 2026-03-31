import FunButton from "@/components/FunButton";
import Navbar from "@/components/home/Navbar";
import "../fun_centre.css"
export default function FunCentreLayout({ children }) {
  return (
      <div
        className={`antialiased`}
      >    
        <div>{children}</div>
        <FunButton/>
      </div>
  );
}