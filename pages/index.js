import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/event-WWDC2023', undefined, { shallow: true });
  }, [router]);
  return <main />;
};

// eslint-disable-next-line import/no-unused-modules
export default Index;
