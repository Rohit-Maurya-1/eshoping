import Image from "next/image";
import bitfins from "../assets/images/Bitfins.png";
import Logo from "../assets/images/Logo.png";
import me from "../assets/images/me.png";
import pendulum from "../assets/images/pendulum.png";
import love from "../assets/images/love.png";
import crypto from "../assets/images/cryptoraggies.png";
import "./style.css"

const SlidersItem = () => {
  return (
    <>
      <marquee behavior="alternate">
        <div className="d-flex" style={{color:"white"}}>
          <span
            className=" p-2 d-flex bg-black mx-2 item"
            style={{ width: 350}}
          >
            <div className="">
              <Image
                src={bitfins}
                className=" px-3 "
                height={100}
                width={160}
                alt="no"
              />
            </div>
            <div className="p-4">
              <div>sdsfdsfdsf</div>
              <div>343</div>
            </div>
          </span>
          <span
            className=" p-2 d-flex  mx-2 item"
            style={{ width: 350,  backgroundColor:"#E1C300"}}
          >
            <div className="">
              <Image
                src={Logo}
                className=" px-3 "
                height={100}
                width={160}
                alt="no"
              />
            </div>
            <div className="p-4">
              <div>sdsfdsfdsf</div>
              <div>343</div>
            </div>
          </span>
          <span
            className=" p-2 d-flex  mx-2 item"
            style={{ width: 350 ,backgroundColor:"#212122"}}
          >
            <div className="">
              <Image
                src={me}
                className=" px-3 "
                height={100}
                width={160}
                alt="no"
              />
            </div>
            <div className="p-4">
              <div>sdsfdsfdsf</div>
              <div>343</div>
            </div>
          </span>
          <span
            className=" p-2 d-flex bg-black mx-2 item" 
            style={{ width: 350 }}
          >
            <div className="">
              <Image
                src={pendulum}
                className=" px-3 "
                height={100}
                width={160}
                alt="no"
              />
            </div>
            <div className="p-4">
              <div>sdsfdsfdsf</div>
              <div>343</div>
            </div>
          </span>
          <span
            className=" p-2 d-flex  mx-2 item"
            style={{ width: 350 , backgroundColor:"black"}}
          >
            <div className="">
              <Image
                src={love}
                className=" px-3 "
                height={100}
                width={160}
                alt="no"
              />
            </div>
            <div className="p-4">
              <div>sdsfdsfdsf</div>
              <div>343</div>
            </div>
          </span>
          <span
            className=" p-2 d-flex  mx-2 item"
            style={{ width: 350, backgroundColor:"purple" }}
          >
            <div className="">
              <Image
                src={crypto}
                className=" px-3 "
                height={100}
                width={160}
                alt="no"
              />
            </div>
            <div className="p-4">
              <div>sdsfdsfdsf</div>
              <div>343</div>
            </div>
          </span>
        </div>
      </marquee>
    </>
  );
};

export default SlidersItem;
