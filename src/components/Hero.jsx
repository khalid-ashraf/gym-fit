import Button from "./Button";

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800ox] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT&apos;S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>
          Gym <span className='text-blue-400'>Fit</span>
        </h1>
      </div>
      <p className='text-sm md:text-base font-light'>
        I hereby acknowledge that I may become{" "}
        <span className='text-blue-400 font-medium'>unbelievably fit</span> and
        accept all risks of becoming the local{" "}
        <span className='text-blue-400 font-medium'>mass monstrosity</span>,
        afflicted with sever body dismorphia, unable to fit through doors.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}>
        Accept & Begin
      </Button>
    </div>
  );
};
export default Hero;
