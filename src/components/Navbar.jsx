const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-5 justify-center items-center font-semibold text-2xl text-white bg-stone-900">
        <li className="py-5 px-3 hover:bg-white hover:text-stone-900">English</li>
        <li className="py-5 px-3 hover:bg-white hover:text-stone-900">Dark</li>
      </ul>
    </nav>
  );
};

export default Navbar;
