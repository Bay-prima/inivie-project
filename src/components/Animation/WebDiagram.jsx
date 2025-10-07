import React from 'react';
import ShinyText from './ShinyText';

// Anda mungkin perlu menginstal dan mengimpor library ikon yang sesuai (misalnya, react-icons)
// Untuk contoh ini, kita gunakan placeholder div. Ganti dengan ikon SVG Anda.



// --- Komponen Item Manfaat ---
const BenefitItem = ({ iconName, text, positionClasses, iconText }) => (
  // positionClasses seperti "top-5 left-1/2 -translate-x-1/2" menentukan posisi absolut
  <div className={`absolute w-36 text-center text-white ${positionClasses}`}>
    
    {/* Wadah Ikon (Lingkaran Oranye) */}
    <div className="mx-auto w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center mb-2 shadow-lg">
      <img src={iconName} alt="" />
    </div>
    
    {/* Teks Manfaat */}
    <ShinyText className="text-xs font-semibold leading-tight drop-shadow" text={text}></ShinyText>
  </div>
);

// --- Komponen Utama: Web Diagram ---
const WebDiagram = () => {
    // Definisi semua Manfaat dan Kelas Posisinya
    const benefits = [
        // Posisi Kiri Atas (Jam 10:30)
        { iconName: "/assets/img/logo-member/1.webp", text: "PRIORITY VIP WELCOME", position: "top-[15%] lg:left-[20%]" },
        
        // Posisi Atas Tengah (Jam 12)
        { iconName: "/assets/img/logo-member/6.webp", text: "15% OFF AT WONDERSPACE OUTLETS", position: "top-7 left-1/2 -translate-x-1/2" },
        
        // Posisi Kanan Atas (Jam 1:30)
        { iconName: "/assets/img/logo-member/4.webp", text: "WELCOME AMENITY", position: "top-[15%] right-[20%] lg:right-[20%]" },

        // Posisi Kiri Tengah (Jam 9)
        { iconName: "/assets/img/logo-member/5.webp", text: "PREMIUM CUSTOMER CARE", position: "top-1/2 -translate-y-1/2 left-[15%]" },

        // Posisi Kanan Tengah (Jam 3)
        { iconName: "/assets/img/logo-member/3.webp", text: "EXCLUSIVE OFFERS", position: "top-1/2 -translate-y-1/2 right-[15%]" },

        // Posisi Kiri Bawah (Jam 7:30)
        { iconName: "/assets/img/logo-member/2.webp", text: "Welcome & Farewell Drinks", position: "bottom-[15%] lg:left-[20%]" },

        // Posisi Bawah Tengah (Jam 6)
        { iconName: "/assets/img/logo-member/8.webp", text: "FREE ACCESS TO BALI'S TOP CLUBS", position: "bottom-5 left-1/2 -translate-x-1/2" },
        
        // Posisi Kanan Bawah (Jam 4:30)
        { iconName: "/assets/img/logo-member/7.webp", text: "RELAXATION, ON US", position: "bottom-[15%]  lg:right-[20%]" },
    ];

    return (
        // Wadah Utama: Ganti ukuran (h-[600px]) dan warna background sesuai kebutuhan Anda
        <div className="relative w-full max-w-[800px] h-[600px] flex items-center justify-center overflow-hidden">
            
            <div className="z-10 text-center">
                {/* Ganti dengan gambar logo bunga Anda */}
                <div className="w-40 mx-auto mb-2 rounded-full flex items-center justify-center">
                    <img src="/assets/img/logo-inivie-ln.png" alt="" loading='lazy' className='w-full h-full object-cover'/>
                </div>
            </div>

            {/* --- WADAH MANFAAT (Tempat semua ikon absolut) --- */}
            <div className="absolute inset-0">
                {benefits.map((benefit, index) => (
                    <BenefitItem 
                        key={index}
                        iconName={benefit.iconName}
                        text={benefit.text}
                        positionClasses={benefit.position}
                    />
                ))}
            </div>

        </div>
    );
};

export default WebDiagram;