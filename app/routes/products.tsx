import { Outlet } from "remix";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Outlet />
    </div>
  );
}
