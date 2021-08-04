import React, {useState} from 'react'

function Imagescroller({images}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    
    const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
        setSelectedImage(images[newIdx]);
        setSelectedImageIndex(newIdx);
    }
    };
    
    
    const handleRightClick = () => {
        if (images && images.length > 0) {
          let newIdx = selectedImageIndex + 1;
          if (newIdx >= images.length) {
            newIdx = 0;
          }
          handleSelectedImageChange(newIdx);
        }
      };

    const handleLeftClick = () => {
    if (images && images.length > 0) {
        let newIdx = selectedImageIndex - 1;
        if (newIdx < 0) {
        newIdx = images.length - 1;
        }
        handleSelectedImageChange(newIdx);
    }
    };

    return (    
        <div className="scroller">
            <div className="image">
            <div
                style={{ backgroundImage: `url(${selectedImage.url})` }}
                className={`carousel__image`}
              />
            </div>
            <button className="prev_button" onClick={handleLeftClick}>  Prev </button>
            <button className="next_button" onClick={handleRightClick}>  Next </button>
        </div>
    )
}

export default Imagescroller
