import Image from 'next/image';
import tw from 'tailwind-styled-components';

// has to have a default
const ChapterHeaderContainer = tw.div`
    w-full
    relative
`;

export default ChapterHeaderContainer;

export const ChapterHeaderScrollingContainer = tw.div`
    flex
    flex-row    
    gap-6
    px-12
    py-4
    overflow-x-auto
    snap-none
    bg-gray-100
`;

const ChapterHeaderPaddleContainer = tw.div`
    absolute
    inset-y-2
    flex
    px-1
    items-center
    justify-center
    text-gray-600
    bg-gray-100
    border-gray-300
    z-10
`;

export const ChapterHeaderPaddleLeftContainer = tw(
  ChapterHeaderPaddleContainer
)`
    left-0
    border-r
`;

export const ChapterHeaderPaddleRightContainer = tw(
  ChapterHeaderPaddleContainer
)`
    right-0
    border-l
`;

export const ChapterContainer = tw.div`
    flex
    flex-col
    gap-2
    items-center
    snap-center
    shrink-0
`;

export const ChapterImage = tw(Image)`
    rounded-lg
`;

export const ChapterTextsContainer = tw.div`
    flex
    flex-col
    items-center
    snap-center
`;

export const ChapterMainText = tw.p`
    font-medium
    text-xs
`;

export const ChapterCaptionText = tw.p`
    font-medium
    text-xs
    text-gray-500
`;

export const Container = tw.div`
    flex
    flex-col
    mx-auto
    px-8
    py-16
    gap-16
    items-center
    max-w-[1280px]
`;

export const Title = tw.h2`
    font-bold
    text-5xl
    text-center
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
    text-center
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
