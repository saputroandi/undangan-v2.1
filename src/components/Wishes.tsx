import React, { ChangeEvent, useState } from "react";
import sanity from "../lib/sanity";
import SlideComp, { Direction } from "./animate/SlideComp";
import { DateTime } from "luxon";

type WishesProps = {
  children?: React.ReactElement;
};

type sanityWish = {
  sender: string;
  pesan: string;
};

const Wishes: React.FC<WishesProps> = (props) => {
  const [data, setData] = useState<sanityWish[]>([]);
  const [pesan, setPesan] = useState<sanityWish>({} as sanityWish);
  const [write, setWrite] = useState(false);
  const { millisecond } = DateTime.now();
  const handleFetch = async () => {
    const res = await sanity.fetch(`*[_type == "ucapan"] | order(_createdAt desc)`);
    setData(res);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log({ name: e.target.name, value: e.target.value });
    setPesan((pesan) => {
      return {
        ...pesan,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    if (pesan.sender.length <= 0 && pesan.pesan.length <= 0) return;
    setWrite(true);
    await sanity.create({
      _id: millisecond,
      _type: "ucapan",
      sender: pesan.sender,
      pesan: pesan.pesan,
    });
    setPesan({} as sanityWish);
    handleFetch();
  };

  React.useEffect(() => {
    handleFetch();
  }, []);
  return (
    <>
      <section id="wishes" className="w-full h-full bg-primary text-secondary">
        <SlideComp
          class="w-full py-10 flex flex-col justify-between items-center"
          direction={Direction.Up}
        >
          <div className="w-10/12 flex flex-col text-justify gap-4">
            <div className="text-center font-sans text-5xl">
              <p>Ucapan</p>
            </div>
            <div className="flex flex-col gap-4">
              {!write && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm">
                    Pengirim:
                    <input
                      className="w-full p-2 rounded-lg focus:outline-none bg-secondary text-primary"
                      type="text"
                      name="sender"
                      placeholder="Nama Anda"
                      onChange={(e) => handleChange(e)}
                    />
                  </label>
                  <label className="text-sm">
                    Pesan:
                    <textarea
                      name="pesan"
                      id="wish"
                      className="w-full p-2 rounded-lg focus:outline-none bg-secondary text-primary"
                      rows={4}
                      placeholder="Berikan Ucapan dan Doa Untuk Kedua Mempelai"
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </label>
                  <div
                    className="p-2 text-center rounded-lg bg-secondary text-primary"
                    onClick={() => handleSubmit()}
                  >
                    <p>Kirim</p>
                  </div>
                </div>
              )}
              <div className="w-full h-[80vh] bg-secondary rounded-lg overflow-auto">
                {data.map((wish) => {
                  return (
                    <div className="w-11/12 mt-3 mx-auto p-3 flex flex-col gap-2 text-sm rounded-lg bg-primary text-secondary">
                      <p>
                        <strong>{wish.sender}</strong>
                      </p>
                      <p className="font-thin text-justify">{wish.pesan}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SlideComp>
      </section>
    </>
  );
};

export default Wishes;
