interface MenuItemProps {
  name: string;
}

const MenuItem = ({ name }: MenuItemProps) => (
  <h2 className="menu-item">{name}</h2>
);

export default MenuItem;
