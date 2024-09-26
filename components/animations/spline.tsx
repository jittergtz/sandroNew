import Spline from '@splinetool/react-spline/next';

export default function Spliner() {
  return (
    <main className=' relative h-full w-full'>
      <Spline
        scene="https://prod.spline.design/Hy7ePhl1cCi-0zPT/scene.splinecode" 
      />
       <div className='w-full h-20  backdrop-blur-md border-t border-neutral-800 absolute bottom-10'></div>
      <div className='w-full h-12 bg-[#0f0f0f] absolute bottom-0'></div>
    </main>
  );
}
