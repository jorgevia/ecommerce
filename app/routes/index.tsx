import { Link } from "remix";

export default function Index() {
  return (
    <div className="text-3xl font-bold underline">
      <h1>Welcome to my Ecommerce site</h1>
      <Link to="/poducts/create">Create a product</Link>
    </div>
  );
}
