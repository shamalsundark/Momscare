import React from 'react'
import { Carousel, Image } from "react-bootstrap";


const AdminSlide = () => {
  return (
    <div>
       <Carousel id="slide">
      <Carousel.Item>
        <Image
          src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/368-2023_08_09-web_banner_travel.jpg"
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
          src="https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/368-2023_08_09-we_know_sleep.jpg"
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
    </div>
  )
}

export default AdminSlide
