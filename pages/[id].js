import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/header';

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <h1>{router.query.id}</h1>
    </>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default Page;
