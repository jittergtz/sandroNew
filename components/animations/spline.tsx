import Spline from '@splinetool/react-spline/next';

export default function Spliner() {
  return (
    <main className=' relative h-full w-full '>
      <Spline 
        scene="https://prod.spline.design/QvknkQ7EhSdcT9rC/scene.splinecode" 
      />
       <div className='w-full h-24 backdrop-blur-md border-t border-neutral-800 absolute bottom-10'></div>
      <div className='w-full h-20 bg-[#000000] absolute bottom-0'></div>
    </main>
  );
}
