import React from 'react';

const CarouselList = ({ item }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-white w-64 h-80 py-4">
      {item}
      <h1 className="text-xl mt-5 font-bold tracking-wide">Livia Neves</h1>
      <p className="text-center tracking-tighter text-lg">
        Regulated Canadian Immigration Consultant
      </p>
    </div>
  );
};

export default CarouselList;
