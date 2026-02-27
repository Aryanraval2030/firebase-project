import { useEffect, useState } from "react"

function Product() {

  const [pre, upPre] = useState(1)
  const [api, setapi] = useState([])

  const [editProduct, setEditProduct] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const getAPI = () => {
    fetch(`http://localhost:3000/mobiles?_page=${pre}&_limit=4`)
      .then(res => res.json())
      .then(dataApi => setapi(dataApi))
  }

  useEffect(() => {
    getAPI()
  }, [pre])

  const goPre = () => {
    if (pre > 1) {
      upPre(pre - 1)
    }
  }

  const goNext = () => {
    upPre(pre + 1)
  }

  const dltProduct = (id) => {
    fetch(`http://localhost:3000/mobiles/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        getAPI()
      })
  }

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target

    setEditProduct({
      ...editProduct,
      [name]:
        name === "price" || name === "stock" || name === "rating"
          ? Number(value)
          : value
    })
  }

  // UPDATE SUBMIT
  const handleSubmit = () => {
    fetch(`http://localhost:3000/mobiles/${editProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editProduct)
    })
      .then(res => res.json())
      .then(() => {
        setShowModal(false)
        getAPI()
      })
  }

  return (
    <div>

      <div className="h-auto mt-3 px-2 text-black flex flex-wrap gap-1 justify-between">
        {api.map((datas) => (
          <div
            key={datas.id}
            className="border-2 border-black h-[400px] w-[290px] text-sm p-1"
          >

            <div className="h-[70%]">
              <img
                src={datas.image}
                alt=""
                className="h-[100%] w-full object-cover rounded-2xl"
              />
            </div>

            <div className="flex justify-between">
              <p>{datas.title}</p>
              <p>{datas.brand}</p>
            </div>

            <div className="flex justify-between">
              <p>{datas.category}</p>
              <p>{datas.rating}</p>
            </div>

            <div className="flex justify-between">
              <p>{datas.stock}</p>
              <p>{datas.price}</p>
            </div>

            <button
              onClick={() => dltProduct(datas.id)}
              className="bg-black text-white w-full py-2 mt-2 rounded-2xl"
            >
              Delete Product
            </button>

            <button
              onClick={() => {
                setEditProduct(datas)
                setShowModal(true)
              }}
              className="bg-blue-600 text-white w-full py-2 mt-2 rounded-2xl"
            >
              Update Product
            </button>

          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <button onClick={goPre} className="bg-black text-white px-5 py-2 rounded-2xl">Prev</button>
        <p className="text-2xl mx-5">{pre}</p>
        <button onClick={goNext} className="bg-black text-white px-5 py-2 rounded-2xl">Next</button>
      </div>

      {/* MODAL */}
      {showModal && editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-[400px] rounded-2xl space-y-3">

            <h2 className="text-xl font-bold text-center">Update Product</h2>

            <input type="text" name="title" value={editProduct.title} onChange={handleChange} className="border w-full p-2" />
            <input type="text" name="brand" value={editProduct.brand} onChange={handleChange} className="border w-full p-2" />
            <input type="text" name="category" value={editProduct.category} onChange={handleChange} className="border w-full p-2" />
            <input type="number" name="rating" value={editProduct.rating} onChange={handleChange} className="border w-full p-2" />
            <input type="number" name="stock" value={editProduct.stock} onChange={handleChange} className="border w-full p-2" />
            <input type="number" name="price" value={editProduct.price} onChange={handleChange} className="border w-full p-2" />

            <div className="flex justify-between">
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

    </div>
  )
}

export default Product