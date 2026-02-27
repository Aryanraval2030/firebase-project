import { useEffect, useState } from "react";

function Product() {
  const [api, setApi] = useState([]);
  const [page, setPage] = useState(0);

  const [editProduct, setEditProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 4;

  // ================= FETCH DATA =================
  useEffect(() => {
    fetch("http://localhost:3000/mobiles")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  // ================= PAGINATION LOGIC =================
  const totalPages = Math.ceil(api.length / itemsPerPage);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const startIndex = page * itemsPerPage;
  const currentItems = api.slice(startIndex, startIndex + itemsPerPage);

  // ================= DELETE =================
  const dltProduct = (id) => {
    fetch(`http://localhost:3000/mobiles/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:3000/mobiles")
        .then((res) => res.json())
        .then((data) => setApi(data));
    });
  };

  // ================= UPDATE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditProduct({
      ...editProduct,
      [name]:
        name === "price" || name === "stock" || name === "rating"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:3000/mobiles/${editProduct.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editProduct),
    })
      .then((res) => res.json())
      .then(() => {
        setShowModal(false);
        fetch("http://localhost:3000/mobiles")
          .then((res) => res.json())
          .then((data) => setApi(data));
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 overflow-hidden">

      <h2 className="text-3xl font-bold text-center mb-8">
        Our Mobiles
      </h2>

      <div className="flex items-center justify-center gap-6">

     

        {/* PRODUCTS */}
        <div className="flex gap-6">

          {currentItems.map((datas) => (
            <div
              key={datas.id}
              className="w-[250px] bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition duration-300"
            >

              <div className="h-[200px] flex justify-center items-center">
                <img
                  src={datas.image}
                  alt=""
                  className="h-full object-contain"
                />
              </div>

              <h3 className="font-semibold mt-4 text-lg">
                {datas.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {datas.brand}
              </p>

              <div className="flex justify-between mt-2 text-sm">
                <span>⭐ {datas.rating}</span>
                <span>Stock: {datas.stock}</span>
              </div>

              <p className="text-blue-600 font-bold mt-3 text-lg">
                ₹{datas.price}
              </p>

              <button
                onClick={() => dltProduct(datas.id)}
                className="bg-black text-white w-full py-2 mt-4 rounded-xl"
              >
                Delete
              </button>

              <button
                onClick={() => {
                  setEditProduct(datas);
                  setShowModal(true);
                }}
                className="bg-blue-600 text-white w-full py-2 mt-2 rounded-xl"
              >
                Update
              </button>

            </div>
          ))}

        </div>

        {/* RIGHT ARROW */}
     

      </div>

      {/* ================= MODAL ================= */}
      {showModal && editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-[400px] rounded-2xl space-y-3">

            <h2 className="text-xl font-bold text-center">
              Update Product
            </h2>

            <input type="text" name="title" value={editProduct.title} onChange={handleChange} className="border w-full p-2 rounded" />
            <input type="text" name="brand" value={editProduct.brand} onChange={handleChange} className="border w-full p-2 rounded" />
            <input type="text" name="category" value={editProduct.category} onChange={handleChange} className="border w-full p-2 rounded" />
            <input type="number" name="rating" value={editProduct.rating} onChange={handleChange} className="border w-full p-2 rounded" />
            <input type="number" name="stock" value={editProduct.stock} onChange={handleChange} className="border w-full p-2 rounded" />
            <input type="number" name="price" value={editProduct.price} onChange={handleChange} className="border w-full p-2 rounded" />

            <div className="flex justify-between pt-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}




         {/* LEFT ARROW */}
       <div className="flex gap-5 justify-center mt-3">
         <button
          onClick={prevPage}
          disabled={page === 0}
          className="text-3xl bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 disabled:opacity-40"
        >
          ◀
        </button>
         <button
          onClick={nextPage}
          disabled={page === totalPages - 1}
          className="text-3xl bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 disabled:opacity-40"
        >
          ▶
        </button>
       </div>

    </div>
  );
}

export default Product;