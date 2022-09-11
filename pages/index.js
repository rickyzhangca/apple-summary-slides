import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/event-wwdc2022', undefined, { shallow: true });
  }, [router]);
  return <main />;
};

// eslint-disable-next-line import/no-unused-modules
export default Index;
