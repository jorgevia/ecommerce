import { Form } from "remix";
import FilesHandler from "~/components/FilesHandler";

// export async function action({ request }) {
//   const body = await request.formData();

//   return redirect(`/todos/${todo.id}`);
// }

export default function Create() {
  return (
    <div className="p-3">
      <h2 className="text-xl font-bold">Create a product</h2>
      <div>
        <Form method="post" encType="multipart/form-data">
          <div className="mt-2">
            <label className="block" htmlFor="productName">
              Nombre del producto
            </label>
            <input
              className="border-black border p-2 w-full"
              id="productName"
              name="productName"
              type="text"
            />
          </div>
          <div className="mt-2 w-full">
            <label className="block" htmlFor="productDescription">
              Descripción del producto
            </label>
            <textarea
              className="border-black border p-2 w-full"
              id="productDescription"
              name="productDescription"
            />
          </div>
          <div className="mt-2 w-full">
            <FilesHandler
              name="productFile"
              label="Product Image"
              multiple={true}
            />
          </div>
          <button
            type="submit"
            className="bg-sky-600 px-4 py-2 rounded-md color text-gray-300 hover:bg-sky-500 mt-8"
          >
            Crear Producto
          </button>
        </Form>
      </div>
    </div>
  );
}
