import React, { useEffect, useState } from 'react'
import ErrorPage from '../constants/ErrorPage';
import Navbar from '../constants/Navbar';

function Error() {

 const handleCloseModal = () => {
   setIsModalOpen(false);
 };
  return (
    <div>
      <Navbar />
      <ErrorPage />
    </div>
  );
}

export default Error
