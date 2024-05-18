import React from "react";
import image6 from "@/image/image6.png";
import image7 from "@/image/image7.png";
import Image from "next/image";

function text2() {
  return (
    <div className="w-full h-screen flex  ">
      <div className="w-1/2 h-full flex flex-col items-center pt-8">
        <p className=" p-8 ">หน่วยอนุพัทธ์ (derived units)</p>
        <h1>
          หน่วยอนุพัทธ์เป็นหน่วยที่ประกอบด้วยหน่วยฐานที่ได้จากการคำนวณทางฟิสิกส์
          เช่น การคูณ (´) หรือ การหาร(¸) ในขณะที่การบวก (+) หรือ การลบ (-)
          หน่วยทางฟิสิกส์นั้นจะยังคงเป็นหน่วยเดิม
        </h1>
        <Image src={image6} alt="" />
        
      </div>
      <div className="w-1/2 h-full flex flex-col items-center pt-8 ">
        <p className="p-8">คำนำหน้าหน่วย (prefix)</p>
        <h1 className="">
          นอกจากนี้ระบบเอสไอได้กำหนดคำนำหน้าหน่วย (prefix)
          เพื่อทำให้หน่วยที่ใช้เล็กลง หรือ ใหญ่ขึ้น
          มีผลให้เขียนปริมาณที่มีค่ามากๆ หรือ ค่าน้อยๆ ได้สะดวกและรวดเร็ว
          โดยคำนำหน้าที่ถูกใช้บ่อย
        </h1>
        <Image src={image7} alt="" height="700" width="700" />
      </div>
    </div>
  );
}

export default text2;
