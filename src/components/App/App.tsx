import css from "./App.module.css";
import { useState, useEffect, useRef } from "react";
import LoadMorebutton from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import ScrollButton from "../ScrollButton/ScrollButton";
import ImageModal from "../ImageModal/ImageModal";

import { fetchImages } from "../../images-api";
import toast, { Toaster } from "react-hot-toast";
import { Image } from "../../types";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [showButton, setShowButton] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(query, page);
        if (data.length === 0) {
          toast.error("No images!");
        } else {
          setImages((prevImages) => {
            return [...prevImages, ...data];
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (images.length <= 12) {
      return;
    }
    if (buttonRef.current) {
      const loadMoreScroll = buttonRef.current.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + loadMoreScroll.top,
        behavior: "smooth",
      });
    }
  }, [images]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setShowButton(scrolled > 0);
  };

  useEffect(() => {
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMassage />}
      {images.length > 0 && <ImageGallery onOpen={openModal} images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMorebutton loadMore={handleLoadMore} onRef={buttonRef} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        selectedImage={selectedImage}
      />
      <Toaster position="top-right" reverseOrder={false} />
      {showButton && <ScrollButton scrollToTop={scrollToTop} />}
    </div>
    //     <div className={css.container}>
    //   <SearchBar onSubmit={handleSearch} />
    //   {error && <ErrorMassage />}
    //   {images.length > 0 && <ImageGallery images={images} onOpen={openModal} />}
    //   {isLoading && <Loader />}
    //   {images.length > 0 && !isLoading && (
    //     <>
    //       <LoadMorebutton loadMore={handleLoadMore} onRef={buttonRef} />
    //       <ImageModal isOpen={modalIsOpen} onClose={closeModal} selectedImage={selectedImage} />
    //       <Toaster position="top-right" reverseOrder={false} />
    //       {showButton && <ScrollButton scrollToTop={scrollToTop} />}
    //     </>
    //   )}
    // </div>
  );
};

export default App;
