import React, { useState, useCallback, useEffect } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';
import PageHeader from 'components/shared/PageHeader/PageHeader';
import { useTranslation } from 'react-i18next';
import './PhotosPage.css';

function PhotosPage() {
  let listOfImages = [];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    setTitle(t('header.photos'));
    setShow(false);
    setTimeout(function () {
      setShow(true);
    }, 800);
  }, [t]);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  listOfImages = importAll(
    require.context(
      `../../../public/assets/images/photos`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = listOfImages.map((image) => {
    return {
      src: image,
      height: 2,
      width: 2,
      title: image.replace(/^.*[\\/]/, ''),
    };
  });
  return (
    <div>
      <div className="component-container pt-0 justify-content-center mt-4">
        <PageHeader
          show={show}
          title={title}
          cssClass="paralsec1-photo photos-component"
        >
          <div className="photo-container photos">
            {photos.map((p, index) => {
              return (
                <img key={index} src={p.src} alt={index} className="photo-bg" />
              );
            })}
          </div>
          <div className="overlay"></div>
        </PageHeader>
        <div className="row mx-4 d-flex justify-content-center">
          <div className="col-lg-10 col-md-12">
            <Gallery
              photos={photos}
              onClick={openLightbox}
              className="image-gallery"
            />
          </div>
        </div>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}

export default PhotosPage;
