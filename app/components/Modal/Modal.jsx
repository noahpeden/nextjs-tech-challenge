const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-4 rounded h-[600px] w-[400px] '>
        <button onClick={onClose} className='float-right'>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
