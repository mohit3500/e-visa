import React from 'react';
import Image from 'next/image';

const ClientsList = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Image src="/user_1077114.png" width={150} height={150} alt="img" />
      <p className="text-3xl tracking-tighter">{item.name}</p>
      <p className="w-[100vw] h-[22vh] text-center my-3 font-semibold -tracking-normal px-[20vw]">
        We strongly recommend e-Visa Immigration Consulting Services.My family
        and I had our PR approved and Marilene's support was essential.Marilene
        has experience and knowledge of the subject. It's been a long road here
        with ups and downs. We had negative experiences with two other
        consultants from another company and Marilene was able to reverse the
        situation. We couldn't have chosen a better professional for our PR
        process. We are grateful to the entire e-Visa team.
      </p>
    </div>
  );
};

export default ClientsList;
