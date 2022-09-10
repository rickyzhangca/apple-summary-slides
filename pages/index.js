import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/hello-world', undefined, { shallow: true });
  }, [router]);
  return (
    <>
      <main>
        <Header />
        <h1>Hello World!</h1>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default Index;
