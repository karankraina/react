import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const CarouselPage = () => {
  return (
    <MDBContainer className='pb-5'>
      {/* <DocsLink
        title='Learn Sharda'
        href='https://karankraina.github.io'
      /> */}

<SectionContainer header='With Controls'>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls
          showIndicators={false}
          className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
              <p>hjsdfg gjsadf hdsg fhgsad hjasfg jsadfhasfhh sfhsadf hasdf hsda fsdf 
              hjsdfg gjsadf hdsg fhgsad hjasfg jsadfhasfhh sfhsadf hasdf hsda fsdf 
              hjsdfg gjsadf hdsg fhgsad hjasfg jsadfhasfhh sfhsadf hasdf hsda fsdf 
              hjsdfg gjsadf hdsg fhgsad hjasfg jsadfhasfhh sfhsadf hasdf hsda fsdf 
              hjsdfg gjsadf hdsg fhgsad hjasfg jsadfhasfhh sfhsadf hasdf hsda fsdf 
              </p>
                {/* <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg'
                  alt='First slide'
                /> */}
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
              <p>sadhv adsh ashgda dhgahhsh s a sdha ajhsdgh asd hasd ashda jsdjhas da ak aksd
              askjdg a ahsgd ad had adha das sd 
              asjdh ahdkjasdh activeItemasdh ajkhdkjashda sgdadsvasgasfv jhfs gyasfhvasdtawdkahdfofutw '
               hagsda shysgf hfhgash aslhfhgas fahvfhagfufaf
               asfha fgafkjbaukfakjdlaoq  asgf fagsfga fhgasyfgas fyagfahfkua fkuag  a akusga fgafjah fagsfgaajd g' 
              </p>
                {/* <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg'
                  alt='First slide'
                /> */}
              </MDBView>
            </MDBCarouselItem>
            {/* <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem> */}
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>
</MDBContainer>
  );
};

export default CarouselPage;
