import MenuItem from '../MenuItem/MenuItem';

const Menu = ():JSX.Element => (
  <nav className="menu">
    <div className="menu-about general">
      <MenuItem name="About me" />
    </div>
    <div className="menu-projects">
      <MenuItem name="Projects" />
    </div>

  </nav>
);

export default Menu;
