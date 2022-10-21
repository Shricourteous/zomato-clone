import React, {useState} from 'react'
import ImageViewer from 'react-simple-image-viewer'



const MenuCollection = (props) => {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [currentImage, setcurrentImage] = useState(0)
  const closeViewer = ()=> setisMenuOpen(false);
  const openViewer = () => setisMenuOpen(true);


  return <>
  {
    isMenuOpen && <ImageViewer src={props.image} currentIndex={currentImage} disableScroll={true} onClose={closeViewer} className={"z-100"}/>
  }
  <div className=' w-32 h-32 flex flex-col md:w-48 md:h-48 ' onClick={openViewer}>
    <div className='w-full h-full overflow-hidden rounded-lg'>
      <img src={props.image[0]} alt="Menu" className='w-full h-full transform transition duration-400 hover:scale-110'/>
    </div>
    <div>
      <strong>{props.menuTitle}</strong>
      <p>{props.page}</p>
    </div>
  </div>
  </>
}

export default MenuCollection