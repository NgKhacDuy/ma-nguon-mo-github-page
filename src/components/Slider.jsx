import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import menu from "../assets/menu.png";
import game from "../assets/game.png";
import waiting from "../assets/waiting.png";
import game_loose from "../assets/game loose.png";
import game_won from "../assets/game won.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  return (
    <Slider className="w-2/4 " {...settings}>
      <div>
        <img className="w-2/4 mx-auto" src={menu} alt="" />
      </div>
      <div>
        <img className="w-2/4 mx-auto" src={waiting} alt="" />
      </div>
      <div>
        <img className="w-2/4 mx-auto" src={game} alt="" />
      </div>
      <div>
        <img className="w-2/4 mx-auto" src={game_won} alt="" />
      </div>
      <div>
        <img className="w-2/4 mx-auto" src={game_loose} alt="" />
      </div>
    </Slider>
  );
}
