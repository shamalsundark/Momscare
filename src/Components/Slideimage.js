import { Carousel, Image } from "react-bootstrap";

function Slideimage() {
  return (
    <Carousel id="slide">
      <Carousel.Item>
        <Image
          src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/333_202206030532_MC_Banner_1920x650_Feeding_Essentials.png"
          alt="Photo"
          className="w-100"
        />
        <Carousel.Caption>
          <h3 className="text-muted">"Welcome to Our Little World!"</h3>
          <p className="text-muted"> "hello pappa mammaa....".</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/318-2023_04_11-MC_HbyH_WebBanners_1920x640_13.02.23_2x_100.jpg"
          alt="Photo"
          className="w-100"
        />
        <Carousel.Caption>
          <h3>
            <span className="text-muted">"Celebrating</span> the Miracle of
            Life!"
          </h3>
          <p>
            {" "}
            <span className="text-muted">"im waiting</span> for seeing in the
            miracle world."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/333-2023_08_01-MC_WebBanner_AW23_1920x650_28.07.23_With_Logo_100.jpg"
          alt="Photo"
          className="w-100"
        />

        <Carousel.Caption>
          <h3 className="text"> "Join Us on this Journey of Parenthood!"</h3>
          <p>"Together, we'll create memories that sparkle like stardust."</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideimage;
