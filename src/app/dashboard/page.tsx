'use client';

import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Modal } from '@/components/atoms/Modal/Modal';
import { Carousel } from '@/components/molecules/Carousel/Carousel';
import Image from 'next/image';

export default function Page() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div
      className="relative w-full h-screen bg-cover"
      style={{ backgroundImage: 'url(/img/Forside_til_export.png)' }}
    >
      <Modal isOpen={showModal} className="">
        <div className="p-12 text-[#003732] w-[800px]">
          <div>
            <p className="text-2xl font-light">Ny og forbedret selvbetjening</p>
            <p className="mt-4">
              Vi har udviklet og opdateret din selvbetjening. Vi arbejder fortsat på de små detaljer, men det
              vigtigste er på plads.
            </p>
          </div>
          <hr className="mt-10" />
          <Carousel
            className="w-[700px]"
            closebutton="spring over"
            prevButtonLabel="Forrige"
            nextButtonLabel="Næste"
            finalButtonLabel="Kom i gang"
            closeModal={() => setShowModal(false)}
          >
            <SwiperSlide>
              <div className="flex px-12 py-10 gap-4">
                <Image src="/slide1.svg" alt="slide1" width={309} height={180} />
                <div className="flex-col flex gap-4">
                  <p>Bedre brugeroplevelse</p>
                  <p className="text-sm">
                    Find hurtigt og nemt vej, til det du har brug for i selvbetjeningen.
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1">
                    <li className="text-sm">Mød et opdateret design, der understøtter funktioner</li>
                    <li className="text-sm">Find nemt rundt med færre menupunkter</li>
                    <li className="text-sm">Naviger hurtigere med simpelt overblik</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex px-12 py-10 gap-4">
                <Image src="/slide2.svg" alt="slide2" width={309} height={180} />
                <div className="flex-col flex gap-4">
                  <p>Bedre kundeoverblik</p>
                  <p className="text-sm">
                    Det er blevet endnu nemmere at håndtere forskellige kunder med forskellige abonnementer og
                    ladeadfærd.
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1">
                    <li className="text-sm">Få det fulde overblik over jeres kunder</li>
                    <li className="text-sm">
                      Dyk ned i detaljer om kundernes abonnementer, ladeadfærd og forbrug
                    </li>
                    <li className="text-sm">Bestil og opsig abonnementer og ladebrikker</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex px-12 py-10 gap-4">
                <Image src="/slide3.svg" alt="slide3" width={309} height={180} />
                <div className="flex-col flex gap-4">
                  <p>Bedre bestillingsflow</p>
                  <p className="text-sm">
                    Det skal være nemt at bestille abonnementer i selvbetjeningen. Derfor har vi forbedret
                    funktionerne i bestillingsflowet.
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1">
                    <li className="text-sm">Bliv guidet til det rette produkt</li>
                    <li className="text-sm">
                      Følg med i bestillingen med tydelig status på processen
                    </li>
                    <li className="text-sm">Modtag en kvitteringsmail i indbakken</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Carousel>
        </div>
      </Modal>
    </div>
  );
}
