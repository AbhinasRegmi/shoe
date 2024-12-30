import Image from 'next/image';

export function Logo() {
  return (
    <div className='h-auto w-full'>
      <Image
        width={120}
        height={32}
        className='h-auto w-full object-cover'
        src='/images/logo.webp'
        alt='website logo'
      />
    </div>
  );
}
