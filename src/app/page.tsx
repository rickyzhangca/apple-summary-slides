import { eventsFromSlides } from '@/data';
import { encodeUrl } from '@/utils';
import { redirect } from 'next/navigation';

const Home = () => {
  redirect(`/events/${encodeUrl(eventsFromSlides[0].name)}`);
};

export default Home;
