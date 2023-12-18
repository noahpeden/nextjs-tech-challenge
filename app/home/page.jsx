'use client';
import { useContext, useState } from 'react';
import Loading from '../loading';
import Filters from '../components/Filters/Filters';
import { DozersContext } from '../contexts/DozersContext';
import Image from 'next/legacy/image';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './home.css';
import Modal from '../components/Modal/Modal';
import RequestInfoForm from '../components/RequestInfoForm/RequestInfoForm';
import requestInfoEmail from '../actions/requestInfoEmail';

const Home = () => {
  const { dozers = [], loading } = useContext(DozersContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDozer, setSelectedDozer] = useState(null);
  console.log(dozers);
  if (loading) return <Loading />;
  if (dozers?.error) return <div>There was an error fetching dozers</div>;

  const handleDozerClick = (e) => {
    const dozer = e.target.value;
    setSelectedDozer(dozer);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (formData) => {
    const { fullName, email, phoneNumber } = formData;
    const emailBody = `${fullName} has requested more information about the ${selectedDozer.brand} ${selectedDozer.model_name} bulldozer. You can reach them at ${email} or call them at ${phoneNumber}.`;
    const msg = {
      to: email,
      from: 'noahpeden@gmail.com',
      subject: `${fullName} has requested more info about ${selectedDozer.brand} ${selectedDozer.model_name}`,
      text: emailBody,
    };
    requestInfoEmail(msg);
    setIsModalOpen(false);
  };

  return (
    <div className='container flex flex-col md:flex-row'>
      <div className='w-full md:w-[350px] md:mr-4'>
        <Filters />
      </div>
      <div className='container mx-auto'>
        <ul>
          <TransitionGroup className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {dozers?.map((product) => (
              <CSSTransition
                key={`${product.brand} - ${product.model_name}`}
                timeout={500}
                classNames='fade'
              >
                <li
                  onClick={() =>
                    handleDozerClick({ target: { value: product } })
                  }
                  className='bg-white shadow-md rounded overflow-hidden hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:border-primary'
                >
                  <div className='p-4 '>
                    <Image
                      src={product.image_url}
                      alt={`${product.brand} - ${product.model_name}`}
                      width={500}
                      height={300}
                      layout='responsive'
                      priority
                    />
                    <h2 className='text-lg font-bold mt-2'>
                      {product.brand} - {product.model_name}
                    </h2>
                    <p className='text-sm text-gray-600'>{product.family}</p>

                    {product?.specs?.map((spec) => (
                      <div
                        className='mt-1'
                        key={`${product.id}-${spec.spec_name}`}
                      >
                        <span className='text-sm font-medium'>
                          {spec.spec_name}:{' '}
                        </span>
                        <span className='text-sm'>{spec.spec_value[0]}</span>
                      </div>
                    ))}
                  </div>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RequestInfoForm onSubmit={handleFormSubmit} dozer={selectedDozer} />
      </Modal>
    </div>
  );
};

export default Home;
