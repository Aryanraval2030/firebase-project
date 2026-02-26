import { useState } from "react"

function Add() {
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    category: "",
    stock: "",
    rating: "",
    image: ""
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/mobiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
        rating: Number(formData.rating)
      })
    })
    .then(res => res.json())
    .then(() => {
      alert("Product Added Successfully ✅")
      // Reset form
      setFormData({
        title: "",
        brand: "",
        price: "",
        category: "",
        stock: "",
        rating: "",
        image: ""
      })
    })
    .catch(err => console.error(err))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Brand */}
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Stock */}
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Rating */}
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating (0-5)"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Image URL */}
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="md:col-span-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
          >
            Add Product
          </button>

        </form>
      </div>
    </div>
  )
}

export default Add