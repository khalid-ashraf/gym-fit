const Button = ({ children, func }) => {
  return (
    <button
      onClick={func}
      className='px-8 mx-auto py-4 rounded-md border-blue-400 border-solid border-[2px] bg-slate-950 blueShadow duration-200'>
      <p>{children}</p>
    </button>
  );
};
export default Button;
