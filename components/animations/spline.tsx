import Spline from '@splinetool/react-spline/next';

export default function Spliner() {
  return (
    <main className=' relative h-full w-full'>
      <Spline
        scene="https://prod.spline.design/gRHx6yq5RWfZgADA/scene.splinecode" 
      />
       <div className='w-full h-20 bg-black/10 backdrop-blur-md border-t border-neutral-600 absolute bottom-10'></div>
      <div className='w-full h-12 bg-black absolute bottom-0'></div>
    </main>
  );
}
