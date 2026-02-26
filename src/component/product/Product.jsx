import { useEffect, useState } from "react"

function Product() {
  const [pre, upPre] = useState(1)


  const [api, setapi] = useState([])

  const getAPI = () => {
    fetch(`http://localhost:3000/mobiles?_page=${pre}&_limit=4`)
      .then(res => res.json())
      .then(dataApi => setapi(dataApi))
      .catch(arr => arr)
  }


  useEffect(() => {
    getAPI()
  }, [pre])

  const goPre = () => {
    if (pre > 1) {
      upPre(pre - 1)

    }
    else {
      return 0

    }

  }

  const goNext = () => {
    upPre(pre + 1)
  }


  const dltProduct = (id) => {

    const dltItem = api.find((items) => items.id === id)

    const oldProdact = JSON.parse(localStorage.getItem("products")) || []


    localStorage.setItem(
      "products", JSON.stringify([...oldProdact, dltItem])
    )



    fetch(`http://localhost:3000/mobiles/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        getAPI()
      })
  }






  return (
    <div>
      <div className="h-auto mt-3 px-2 text-black flex flex-wrap gap-1 justify-between">
        {
          api.map((datas) => {
            return (
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

                <button onClick={() => dltProduct(datas.id)} className="bg-black text-white w-full py-2 px-7 mt-2 rounded-2xl">
                  Delete Product
                </button>
              </div>
            )
          })
        }

      </div>
      <div className="flex justify-center items-center">
        <button onClick={goPre} className="bg-black text-white min-w-[100px] py-2 px-7 mt-2 rounded-2xl">prev</button>
        <p className="text-2xl mx-5">{pre}</p>
        <button onClick={goNext} className="bg-black text-white min-w-[100px] py-2 px-7 mt-2 rounded-2xl">next</button>
      </div>
    </div>
  )
}

export default Product
