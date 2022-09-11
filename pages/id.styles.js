import Image from 'next/image';
import tw from 'tailwind-styled-components';

// has to have a default
const ChapterHeaderContainer = tw.div`
    flex
    flex-row
    gap-6
    w-full
    px-6
    py-4
    overflow-x-auto
    snap-none
    bg-gray-100
`;

export default ChapterHeaderContainer;

export const ChapterContainer = tw.div`
    flex
    flex-col
    gap-[6px]
    items-center
    snap-center
    shrink-0
`;

export const ChapterImage = tw(Image)`
    rounded-lg
`;

export const ChapterMainText = tw.p`
    font-medium
    text-xs
`;

export const Container = tw.div`
    flex
    flex-col
    mx-auto
    px-8
    py-16
    gap-16
    items-center
    max-w-[1920px]
`;

export const Title = tw.h2`
    font-bold
    text-5xl
`;

export const SlidesContainer = tw.div`
    flex
    flex-col
    w-full
    gap-8
    items-center
`;

export const SlideContainer = tw.div`
    flex
    flex-col
    w-full
    gap-6
    items-center
`;

export const Subtitle = tw.h3`
    font-semibold
    text-2xl
`;

export const SlideImage = tw(Image)`
    rounded-lg
`;

export const BackToTopButton = tw.button`
    flex
    flex-row
    gap-2
    px-3
    py-2
    items-center
    text-blue-600
    hover:underline
`;

export const BackToTopButtonText = tw.p`
    text-blue-600
`;
