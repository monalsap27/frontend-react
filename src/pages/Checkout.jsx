import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../elements/Footer";
import Mandiri from "../../public/img/mandiri.png";
import Bca from "../../public/img/bca.png";
import ProfilPesanan from "../../public/img/profilRingkasanPesanan.png";

const Checkout = () => {
    const navigate = useNavigate();

    const detailCourse = localStorage.getItem("data course");
    const data = JSON.parse(detailCourse);

    return ( 
        <div className="bg-slate-200">
            <div className="fixed top-0 w-full text-white h-14 bg-cyan-950">
                <Navbar/>
            </div>
            <div className="flex items-center pt-16 mx-3 text-xs">
                <span class="material-symbols-outlined mr-1 scale-75">keyboard_backspace</span>
                <p onClick={() => navigate('/detail')} className="cursor-pointer hover:text-blue-500">Course</p>
                <div className="mt-1">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span class="material-symbols-outlined scale-75">chevron_right</span>
                </div>
                <p className="font-bold text-blue-500">Checkout</p>
            </div>
            <div className="mx-3 mt-2">
                <h1 className="text-xl font-bold md:ml-3">Checkout</h1>
                <div className="px-4 py-5 mt-2 bg-white rounded-lg shadow-md md:px-6">
                    <h2 className="font-bold md:text-lg">Pilih Metode Pembayaran</h2>
                    <h3 className="mt-4 text-sm font-bold md:text-base md:mt-2">Bank Transfer (verifikasi manual)</h3>
                    <p className="mt-1 mb-3 text-xs md:text-sm">Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp</p>
                    <hr />
                    <div className="mt-3">
                        <div className="flex gap-3 p-3 mb-2 text-sm border shadow-sm">
                            <img src={Mandiri} alt="mandiri" />
                            <p>Bank Transfer ke Rek Bank Mandiri</p>
                        </div>
                        <div className="flex gap-3 p-3 text-sm border shadow-sm">
                            <img src={Bca} alt="BCA" />
                            <p>Bank Transfer ke Rek Bank BCA</p>
                        </div>
                    </div>
                    <h3 className="mt-4 text-sm font-bold md:text-base">Virtual Account (verifikasi otomatis)</h3>
                    <p className="mt-1 mb-3 text-xs md:text-sm">Pembayaran melalui virtual account berbagai bank. Metode bayar ini akan diverifikasi secara otomatis.  </p>
                    <hr />
                    <div className="mt-3">
                        <div className="flex gap-3 p-3 mb-2 text-sm border shadow-sm">
                            <img src={Mandiri} alt="mandiri" />
                            <p>Bank Transfer ke Rek Bank Mandiri</p>
                        </div>
                        <div className="flex gap-3 p-3 text-sm border shadow-sm">
                            <img src={Bca} alt="BCA" />
                            <p>Bank Transfer ke Rek Bank BCA</p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-5 mt-2 bg-white rounded-lg shadow-md md:px-6">
                    <h2 className="text-lg font-bold">Ringkasan Pesanan</h2>
                    <div className="flex gap-3 mt-3">
                        <div className="w-24 h-24 p-3 rounded-lg bg-cyan-950">
                            <img src={ProfilPesanan} alt="Profil" className="w-12 mx-auto"/>
                        </div>
                        <div className="text-left ">
                            <h2 className="text-lg font-bold">{data.title}</h2>
                            <h3 className="font-bold text-md">{data.desc}</h3>
                            <div className="flex gap-3 mt-2 text-sm">
                                <p>Batch</p>
                                <p>{data.batch}</p>
                            </div>
                            <div className="flex gap-3 mb-5 text-sm">
                                <p>Mentor</p>
                                <p>{data.mentor1}</p>
                            </div>
                        </div>
                    </div>
                    <h3 className="mb-2 font-bold">Kode Promo</h3>
                    <div className="flex justify-between gap-2">
                        <input type="text" placeholder="Masukkan kode promo" className="w-full px-3 py-2 text-sm border"/>
                        <button className="p-3 text-sm text-white rounded-sm bg-cyan-950">Terapkan</button>
                    </div>
                    <h3 className="mt-4 mb-2 font-bold">Metode Pembayaran</h3>
                    <p className="text-sm">Bank Transfer (verifikasi manual) - Mandiri</p>
                    <h3 className="mt-4 mb-2 font-bold">Metode Pembayaran</h3>
                    <div className="flex justify-between mb-3 text-sm">
                        <ul>
                            <li>Harga Kelas</li>
                            <li>Potongan</li>
                            <li>Promo</li>
                            <li>Kode Unik</li>
                        </ul>
                        <ul className="text-center">
                            <li>{(parseInt(data.price)+200000).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</li>
                            <li>{(parseInt(data.price)+200000-data.price).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</li>
                            <li>-</li>
                            <li>-</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-3">
                        <h3 className="mb-2 font-bold ">Total Pembayaran</h3>
                        <p className="font-bold">{(parseInt(data.price)).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</p>
                    </div>
                    <p className="mt-5 text-sm">Dengan menekan tombol Bayar kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali <a href="" className="text-blue-500">Syarat & ketentuan</a> yang berlaku.</p>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center text-sm cursor-pointer hover:text-blue-500">
                            <span class="material-symbols-outlined scale-75">arrow_back_ios</span>
                            <p onClick={() => navigate('/detail')}>Batalkan</p>
                        </div>
                        <button className="px-10 py-2 text-sm text-white transition-all rounded-full bg-cyan-950 hover:bg-cyan-900" onClick={() => navigate('/bayar')}>Bayar</button>
                    </div>
                </div>
            </div>
            <div className="mt-5 bg-white">
                <Footer/>
            </div>
        </div>
     );
}
 
export default Checkout;