import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Farhan Alam Saputra
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Perkenalkan Nama saya Farhan Alam Saputra, saya adalah seorang Mahasiswa jurusan teknik informatika di salah satu perguruan tinggi di Indonesia. saya juga mengambil kursus online di beberapa platform seperti Jayjay, Hacktiv8, dan lain-lain. saya memiliki hobby yaitu bermain game dan mempelajari teknologi baru.
        </p>
      </div>
    </section>
  );
}
