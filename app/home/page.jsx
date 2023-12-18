'use client';
import { useContext, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './home.css';
import Loading from '../loading';

import { DozersContext } from '../contexts/DozersContext';
import requestInfoEmail from '../actions/requestInfoEmail';

import Filters from '../components/Filters';
import Modal from '../components/Modal';
import RequestInfoForm from '../components/RequestInfoForm';
import Card from '../components/Card';

const Home = () => {
  const { dozers = [], loading } = useContext(DozersContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDozer, setSelectedDozer] = useState(null);

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
                <Card handleDozerClick={handleDozerClick} product={product} />
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
