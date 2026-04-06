
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";

const images = [img1, img2, img3,,img5,img6,img4,img7];

const PoweringSection=()=>{
  return(
  <>
   <section className="bg-black">
    <div className="container m-auto">
         <h2 className="text-secondary text-xl text-center p-4 md:p-16 uppercase">Powering tools and integration for companies around the world</h2>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-3 px-4 md:px-0 pb-8 md:pb-0">

      {images.map((img, index) => (
        <img key={index} src={img} alt="img" className=" cursor-pointer"/>
      ))}
    </div>
    </div>
    
   </section>
    
  </>);
}
export default PoweringSection;