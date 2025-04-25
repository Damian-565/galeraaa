import React, { useState } from 'react';
import Modal from 'react-modal';
import './styl.css';

Modal.setAppElement('#root');

// Nowe kategorie z nazwami Zwierzęta, Natura, Miasta
const categories = [
  { id: 1, name: 'Zwierzęta', images: ['animals1.jpg', 'animals2.jpg', 'animals3.jpg'] },
  { id: 2, name: 'Natura', images: ['nature1.jpg', 'nature2.jpg', 'nature3.jpg'] },
  { id: 3, name: 'Miasta', images: ['city1.jpg', 'city2.jpg', 'city3.jpg'] },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <div className="App">
      <h1>Galeria zdjęć</h1>


      <div className="categories">
        {categories.map((category) => (
          <button key={category.id} onClick={() => setSelectedCategory(category)}>
            {category.name}
          </button>
        ))}
      </div>

      <div className="gallery">
        {selectedCategory.images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              
              src={`images/${image}`}  
              alt={image}
              className="thumbnail"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Powiększone zdjęcie">
        <button onClick={closeModal} className="close-button">X</button>
        <img src={`images/${modalImage}`} alt={modalImage} className="modal-image" />
      </Modal>
    </div>
  );
}

export default App;
