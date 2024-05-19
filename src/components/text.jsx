import React from "react";
import Image from "next/image";
import image6 from "@/images/image6.png";
import image4 from "@/images/image4.png";
import image5 from "@/images/image5.png";
import image7 from "@/images/image7.png";

function text() {
  return (
    <div className="flex h-full w-full items-center justify-center  ">
      <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "67.5%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src="/todoki.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="w-1/4  flex  h-full">
      </div>
      <div className="w-1/2  flex  items-center flex-col p-4  bg-slate-200">
        <Image src={image4} alt="" />
        <p className="font-bold text-xl pt-4">ระบบเมตริก</p>

        <h1 className=" ">
          หน่วยวัดความยาวในระบบเมตริกที่เราคุ้นเคยกันมักจะใช้กับการวัดขนาด
          หาความยาวของสิ่งต่างๆ รวมไปถึงใช้เป็นหน่วยของระยะทาง ดังนี้ มิลลิเมตร,
          เซนติเมตร, เมตร และกิโลเมตร นอกจากนั้นยังมีเฮกโตเมตร เดคาเมตร
          และเดซิเมตร ที่มักใช้เป็นหน่วยการวัดในเชิงวิทยาศาสตร์
        </h1>

        <p className="font-bold text-xl pt-4">ระบบอิมพีเรียล</p>

        <h1 className="">
          ระบบการวัดอเมริกัน-อังกฤษ หรือเรียกอีกอย่างว่าระบบอิมพีเรียล
          นิยมใช้กันในประเทศอังกฤษและอเมริกา
          แต่เนื่องจากในอดีตอังกฤษเป็นประเทศที่เป็นจักรวรรดิ
          แผ่อำนาจครอบคลุมไปเกือบทั่วโลก
          หน่วยวัดในระบบอิมพีเรียลจึงเป็นที่รู้จักและนิยมใช้กันแพร่หลายมาจนถึงปัจจุบัน
          หน่วยวัดระบบอเมริกัน-อังกฤษ มีดังนี้ นิ้ว (inch), ฟุต (foot), หลา
          (yard) และไมล์ (mile)
        </h1>

        <p className="font-bold text-xl pt-4">
          ระบบหน่วยระหว่างชาติ หรือ ระบบเอสไอ (SI : The International System of
          Units)
        </p>

        <h1 className="">
          เราจะพบว่าแต่ละประเทศมีระบบหน่วยการวัดไม่เหมือนกัน
          ซึ่งอาจทำให้เกิดปัญหาในการแปลงหน่วยต่างๆ
          เพื่อให้การใช้หน่วยเป็นมาตรฐานเดียวกันทั่วโลกโดยเฉพาะในวงการวิทยาศาสตร์
          องค์การระหว่างประเทศว่าด้วยการมาตรฐาน (ISO หรือ International
          Organization for Standardization)
          จึงได้กำหนดระบบหน่วยมาตรฐานที่เรียกว่า ระบบหน่วยระหว่างชาติ หรือ
          ระบบเอสไอ (SI : The International System of Units)
          ให้ทุกประเทศใช้เป็นมาตรฐาน ในปีพ.ศ. 2503
          องค์กรระหว่างประเทศว่าด้วยมาตรฐาน ISO
          ได้กำหนดให้มีระบบวัดใหม่ขึ้นเพื่อใช้ในทางวิทยาศาสตร์และเพื่อให้การวัดเป็นมาตรฐานเดียวกันทั่วโลก
          เรียกว่า ระบบ SI หรือระบบระหว่างประชาชาติ แม้ระบบนี้จะใช้กันทั่วโลก
          แต่ก็ยังมีบางประเทศที่ยังไม่เปลี่ยนมาใช้ระบบ SI เช่น สหรัฐอเมริกา
          ไลบีเรีย และ พม่า เป็นต้น
          โดยใช้ระบบอิมพีเรียลตามแบบฉบับอเมริกัน-อังกฤษ อยู่เหมือนเดิม
          โดยระบบเอสไอประกอบด้วย หน่วยฐาน (base units) และ หน่วยอนุพันธ์
          (derived units) ดังรายละเอียดต่อไปนี้
        </h1>

        <p className="font-bold text-xl pt-4">หน่วยฐาน (base units)</p>
        <Image src={image5} alt="" />

        <p className="font-bold text-xl pt-4">หน่วยอนุพัทธ์ (derived units)</p>
        <h1>
          หน่วยอนุพัทธ์เป็นหน่วยที่ประกอบด้วยหน่วยฐานที่ได้จากการคำนวณทางฟิสิกส์
          เช่น การคูณ (´) หรือ การหาร(¸) ในขณะที่การบวก (+) หรือ การลบ (-)
          หน่วยทางฟิสิกส์นั้นจะยังคงเป็นหน่วยเดิม
        </h1>
        <Image src={image6} alt="" />

        <p className="font-bold text-xl pt-4">คำนำหน้าหน่วย (prefix)</p>
        <h1 className="">
          นอกจากนี้ระบบเอสไอได้กำหนดคำนำหน้าหน่วย (prefix)
          เพื่อทำให้หน่วยที่ใช้เล็กลง หรือ ใหญ่ขึ้น
          มีผลให้เขียนปริมาณที่มีค่ามากๆ หรือ ค่าน้อยๆ ได้สะดวกและรวดเร็ว
          โดยคำนำหน้าที่ถูกใช้บ่อย
        </h1>
        <Image src={image7} alt="" height="700" width="700" />
      </div>
      <div
        className="w-1/4 flex h-full"
        style={{ backgroundImage: "url('/jpg2.jpg')" }}
      ></div>
    </div>
  );
}

export default text;
