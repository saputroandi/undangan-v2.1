import React from "react";

type WishesProps = {
  children?: React.ReactElement;
};

const Wishes: React.FC<WishesProps> = (props) => {
  return (
    <>
      <section className="w-full py-10 flex flex-col justify-between items-center">
        <div className="w-10/12 flex flex-col text-justify gap-4">
          <div className="text-center">
            <p>Ucapan</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label>
                Pengirim:
                <input
                  className="w-full p-2 rounded-lg focus:outline-none"
                  type="text"
                  name="sender"
                  placeholder="Nama Anda"
                />
              </label>
              <label>
                Ucapan
                <textarea
                  name="wishes"
                  id="wish"
                  className="w-full p-2 rounded-lg focus:outline-none"
                  rows={4}
                  placeholder="Berikan Ucapan dan Doa Untuk Kedua Mempelai"
                ></textarea>
              </label>
              <div className="p-2 text-center rounded-lg bg-slate-500">
                <p>Kirim</p>
              </div>
            </div>
            <div className="w-full h-96 bg-slate-100 rounded-lg overflow-auto">
              {/* loop wishes here */}
              <div className="w-11/12 mt-3 mx-auto p-3 flex flex-col gap-2 rounded-lg bg-slate-300">
                <p>
                  <strong>Lorem, ipsum.</strong>
                </p>
                <p className="font-thin text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  debitis maxime tempore. Numquam, ipsam deleniti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishes;
