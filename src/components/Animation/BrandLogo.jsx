import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BrandLogo = () => {
 // Ref untuk setiap kotak
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  // Definisi posisi target
  const POSITIONS = {
    balik: {x: 0, y: 0},
    A: { x: -110, y: -50 },    // Posisi awal Box 1
    B: { x: 95, y: -86 },   // Posisi awal Box 2
    C: { x: -100, y: 110 },   // Posisi awal Box 3
    D: {x: 120, y: 90},
  };

  useEffect(() => {
    // Pastikan semua elemen sudah ada
    if (!box1Ref.current || !box2Ref.current || !box3Ref.current || !box4Ref.current) return;

    const tl = gsap.timeline({
      // Kunci: Loop tak terbatas
      repeat: -1,
      repeatDelay: 3,
      defaults: {
        duration: 3, // Kecepatan setiap gerakan
        ease: 'power2.inOut',
      },
    });

    // --- SIKLUS LOOP 1 ---

    tl.addLabel('step1'); // Label untuk memulai langkah 1

    // 1. Box 1 (A) pindah ke posisi D
    tl.to(box1Ref.current, { x: POSITIONS.D.x, y: POSITIONS.D.y , scale: 1.4, rotate: '+=20'}, 'step1');

    // 2. Box 2 (B) pindah ke posisi A
    tl.to(box2Ref.current, { x: POSITIONS.A.x, y: POSITIONS.A.y , rotate: '+=20'}, 'step1');

    // 3. Box 3 (C) pindah ke posisi B
    tl.to(box3Ref.current, { x: POSITIONS.B.x, y: POSITIONS.B.y , rotate: '+=25'}, 'step1');

    // 4. Box 4 (D) pindah ke posisi C
    tl.to(box4Ref.current, { x: POSITIONS.C.x, y: POSITIONS.C.y , rotate: '-=50'}, 'step1');

    tl.addLabel('step2'); // Label untuk memulai langkah 1

    // 1. Box 1 (A) pindah ke posisi D
    tl.to(box1Ref.current, { x: POSITIONS.D.x, y: POSITIONS.D.y , scale: 1.4, rotate: '+=0'}, 'step2');

    // 2. Box 2 (B) pindah ke posisi A
    tl.to(box2Ref.current, { x: POSITIONS.A.x, y: POSITIONS.A.y , rotate: '+=0'}, 'step2');

    // 3. Box 3 (C) pindah ke posisi B
    tl.to(box3Ref.current, { x: POSITIONS.B.x, y: POSITIONS.B.y , rotate: '+=0'}, 'step2');

    // 4. Box 4 (D) pindah ke posisi C
    tl.to(box4Ref.current, { x: POSITIONS.C.x, y: POSITIONS.C.y , rotate: '-=0'}, 'step2');

    tl.addLabel('step3'); // Label untuk memulai langkah 1

    // 1. Box 1 (A) pindah ke posisi D
    tl.to(box1Ref.current, { x: POSITIONS.D.x, y: POSITIONS.D.y , scale: 1.4, rotate: '+=0'}, 'step3');

    // 2. Box 2 (B) pindah ke posisi A
    tl.to(box2Ref.current, { x: POSITIONS.A.x, y: POSITIONS.A.y , rotate: '+=0'}, 'step3');

    // 3. Box 3 (C) pindah ke posisi B
    tl.to(box3Ref.current, { x: POSITIONS.B.x, y: POSITIONS.B.y , rotate: '+=0'}, 'step3');

    // 4. Box 4 (D) pindah ke posisi C
    tl.to(box4Ref.current, { x: POSITIONS.C.x, y: POSITIONS.C.y , rotate: '-=0'}, 'step3');


    



    // STEP BALIK KE AWAL X: 0 Y: 0
    tl.addLabel('stepBalik');

    tl.to(box1Ref.current, { x: POSITIONS.balik.x, y: POSITIONS.balik.y , rotate: '+=155' , scale: 0}, 'stepBalik');
    tl.to(box2Ref.current, { x: POSITIONS.balik.x, y: POSITIONS.balik.y , rotate: '+=155' , scale: 0}, 'stepBalik');
    tl.to(box3Ref.current, { x: POSITIONS.balik.x, y: POSITIONS.balik.y , rotate: '+=155' , scale: 0}, 'stepBalik');
    tl.to(box4Ref.current, { x: POSITIONS.balik.x, y: POSITIONS.balik.y , rotate: '+=155' , scale: 0}, 'stepBalik');




    // Cleanup
    return () => tl.kill();
  }, []);

  // Style dasar untuk kotak
  const boxStyle = {
    width: 40,
    height: 40,
    position: 'absolute',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div className="relative flex w-full bg-blue-50 items-center justify-center">
        <a className="flex items-center justify-center uppercase rounded-lg z-40 w-36 bg-blue-50 "><img src="/assets/img/logo-inivie-ln.png" alt="iNi-Vie-Logo" /></a>
      <div
        ref={box1Ref}
        style={{ ...boxStyle, }}
      >
        <img src="/assets/img/logo-member/1.webp" alt="member-logo-1" className="hover:scale-90 transition-all duration-500 ease-in-out" />
      </div>
      <div
        ref={box2Ref}
        style={{ ...boxStyle,  }}
      >
        <img src="/assets/img/logo-member/5.webp" alt="member-logo-2" className="hover:scale-90 transition-all duration-500 ease-in-out" />
      </div>
      <div
        ref={box3Ref}
        style={{ ...boxStyle,   }}
      >
        <img src="/assets/img/logo-member/3.webp" alt="member-logo-3" className="hover:scale-90 transition-all duration-500 ease-in-out" />
      </div>
      <div
        ref={box4Ref}
        style={{ ...boxStyle,   }}
      >
        <img src="/assets/img/logo-member/4.webp" alt="member-logo-4" className="hover:scale-90 transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
};

export default BrandLogo;
