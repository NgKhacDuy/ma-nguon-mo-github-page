import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser } from "react-icons/fa"; // Import user icon from react-icons

export default function MemberSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  return (
    <Slider className="w-2/4 " {...settings}>
      <div className="p-4 shadow-lg rounded bg-white border-2 border-gray-300">
        <FaUser className="mb-2" /> {/* User icon */}
        <h2 className="text-xl font-bold mb-2">Nguyễn Khắc Duy</h2>
        <p className="text-gray-700">Sinh viên CNTT SGU.</p>
      </div>
      <div className="p-4 shadow-lg rounded bg-white border-2 border-gray-300">
        <FaUser className="mb-2" /> {/* User icon */}
        <h2 className="text-xl font-bold mb-2">Nguyễn Văn Dũng</h2>
        <p className="text-gray-700">Sinh viên CNTT SGU.</p>
      </div>
      <div className="p-4 shadow-lg rounded bg-white border-2 border-gray-300">
        <FaUser className="mb-2" /> {/* User icon */}
        <h2 className="text-xl font-bold mb-2">Kiều Minh Tuyển</h2>
        <p className="text-gray-700">Sinh viên CNTT SGU.</p>
      </div>
      <div className="p-4 shadow-lg rounded bg-white border-2 border-gray-300">
        <FaUser className="mb-2" /> {/* User icon */}
        <h2 className="text-xl font-bold mb-2">Huỳnh Phan Quốc Huy</h2>
        <p className="text-gray-700">Sinh viên CNTT SGU.</p>
      </div>
    </Slider>
  );
}
