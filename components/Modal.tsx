import { useEffect, useRef, useState } from "react";
import "../styles/modal.scss";

const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };
  const openModal2 = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex space-x-10">
        <button className="btn modal-1 rounded-full" onClick={openModal}>
          Open Modal 1
        </button>
        <button className="btn modal-2 bg-primary" onClick={openModal2}>
          Open Modal 2
        </button>
      </div>

      {isOpen && (
        <div className="modal">
          <div></div>
          <div ref={popupRef} className="modal-box">
            <h2 className="modal-title">Modal Title</h2>
            <p className="mb-4">Modal content goes here.</p>
            <div className="flex justify-end">
              <button className="close-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
