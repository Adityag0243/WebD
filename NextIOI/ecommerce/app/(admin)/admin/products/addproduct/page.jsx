
import styles from '@/app/(admin)/admin/form.module.css'

function AddProduct() {
    return (
        <div className="w-full flex justify-center mt-10">
            <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-5">
                <h2 className={` text-2xl font-semibold text-center text-gray-700 mb-4`}>
                    Add New Product
                </h2>
                <div className="flex flex-col">
                    <label className={` text-gray-600 font-medium mb-1`}>Product Name ★</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Product Name"
                        required
                        className={` ${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>


                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Price★</label>
                    <input
                        type="number"
                        name="pPrice"
                        placeholder="Enter Product Price"
                        required
                        className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Stock★</label>
                    <input
                        type="number"
                        name="pStock"
                        placeholder="Enter Stock Quantity"
                        required
                        min="1"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Image Link</label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter Image Link"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Category</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter Category name"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Product Description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter Product Description"
                        maxLength={100}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProduct
