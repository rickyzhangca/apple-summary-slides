import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
    flex
    flex-row
    justify-between
    items-center
    bg-gray-800
    px-6
    py-4
`;

export const HeaderRightWrapper = tw.div`
    min-w-[155px]
    flex
    flex-row
    justify-end
`;

export const HeaderMiddleWrapper = tw.div`
    flex
    flex-row
    gap-6
`;

export const HeaderLeftWrapper = tw.div`
    min-w-[155px]
    flex
    flex-row
    justify-start
`;

export const Title = tw.h1`
    text-sm
    font-bold
    text-white
    cursor-pointer
`;

export const HeaderLink = tw.a`
    text-sm
    font-medium
    text-gray-300
    hover:no-underline
    hover:text-white
    transition
`;
