import React from "react";

type OpeningProps = {
  children?: React.ReactElement;
};

const Opening: React.FC<OpeningProps> = (props) => {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center">
        <div className="h-96 flex flex-col justify-between items-center">
          <div className="w-8/12 h-64 flex flex-col items-center justify-around">
            <div className="w-full text-3xl text-left">
              <h2>fulanah</h2>
            </div>
            <div className="text-xl">
              <h2>&</h2>
            </div>
            <div className="w-full text-3xl text-right">
              <h2>fulan</h2>
            </div>
          </div>
          <div className="w-11/12 h-20 flex justify-around items-center bg-green-200">
            <div className="flex flex-col justify-center items-center">
              <div>
                <p>00</p>
              </div>
              <div>
                <p>Hari</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <p>00</p>
              </div>
              <div>
                <p>Jam</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <p>00</p>
              </div>
              <div>
                <p>Menit</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <p>00</p>
              </div>
              <div>
                <p>Detik</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opening;
