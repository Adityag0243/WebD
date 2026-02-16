'use client'

import Card from "@/components/card";
import EditModal from "./editModal";
import { useState } from "react";

function Products({ prod }) {

  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEditModal = (productData) => {
    setEditingProduct(productData);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
  }


  return (
    <>

      <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 m-4 gap-6'>
        {prod.map((item, idx) => (
          <Card
            key={idx}
            _id={item._id}
            imgSrc={item.image}
            itemName={item.name}
            itemPrice={item.price}
            itemRating={4}
            desc={item.description}
            onEdit={() => openEditModal(item)}
          />
        ))}
      </div>

      {isModalOpen && editingProduct && (
        <EditModal
          isOpen={isModalOpen}
          onClose={closeEditModal}
          editData_={editingProduct}
        />
      )}

    </>
  );
}

export default Products;
