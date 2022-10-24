import React, {useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';

import PhotoCollection from './PhotoCollection'

const Photos = () => {
  const [photos, setphotos] = useState([
    
    "https://b.zmtcdn.com/data/reviews_photos/075/ffc72ffce3028e3c62e819b66ad80075_1564655420.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/2e9/bba71498837fe9e2fee107f985fc82e9_1539707070.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/2e9/bba71498837fe9e2fee107f985fc82e9_1539707070.jpg",
    'https://b.zmtcdn.com/data/reviews_photos/ef0/166b5ae1ac11a04d957a5a163e045ef0_1535190214.jpg',
    'https://b.zmtcdn.com/data/reviews_photos/a7e/dd4ab66c543b1fff0eb2f20a60f8ca7e_1635840752.jpg',
    'https://b.zmtcdn.com/data/reviews_photos/b52/7988d900698141697e9375de3573fb52_1541001177.jpg'
  ]);
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [currentImage, setcurrentImage] = useState(0)

  const closeViewer = ()=> setisMenuOpen(false)
  const openViewer =()=> setisMenuOpen(true)

  return (
    <>
      {isMenuOpen && <ImageViewer src={photos} currentIndex={currentImage} disableScroll={false} onClose={closeViewer} />}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
        {photos.map((photo, index)=>(
          <PhotoCollection key={index} index = {index} openViewer={openViewer} setcurrentImage= {setcurrentImage} image ={photo} />
        ))}
      </div>
    </>
  )
}

export default Photos