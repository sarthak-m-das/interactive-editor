import React, { useState } from 'react';
import Modal from 'react-modal';
import './CreateArticleModal.scss';

interface CreateArticleModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  handleSubmit: (name: string, description: string) => void;
};


Modal.setAppElement('#root');

const CreateArticleModal: React.FC<CreateArticleModalProps> = ({ modalIsOpen, closeModal, handleSubmit }) => {
  const [articleName, setArticleName] = useState('');
  const [articleDescription, setArticleDescription] = useState('');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Create Article Modal"
    >
      <h2>Create New Article</h2>
      <form onSubmit={() => handleSubmit(articleName, articleDescription)}>
        <label>
          Article Name
          <input
            type="text"
            value={articleName}
            onChange={(e) => setArticleName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description
          <textarea
            value={articleDescription}
            onChange={(e) => setArticleDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Create</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </form>
    </Modal>
  );
};

export default CreateArticleModal;
