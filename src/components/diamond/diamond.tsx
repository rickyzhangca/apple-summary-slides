import { tw } from '@/utils';

type DiamondProps = {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export const Diamond = ({ position }: DiamondProps) => {
  return (
    <div
      className={tw(
        'absolute z-10 h-2 w-2 rotate-45 rounded-[1px] border border-zinc-300 bg-white',
        position === 'top-left' && 'right-[-4.5px] top-[-4.5px]',
        position === 'top-right' && 'left-[-4.5px] top-[-4.5px]',
        position === 'bottom-left' && 'bottom-[-4.5px] right-[-4.5px]',
        position === 'bottom-right' && 'bottom-[-4.5px] left-[-4.5px]'
      )}
    />
  );
};
