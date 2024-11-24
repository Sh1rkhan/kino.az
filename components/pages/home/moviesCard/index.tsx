import Title from "@/components/common/Title";
import Image from "next/image";
import { Card, CardHeader, CardBody} from "@nextui-org/card";
import { FaPlay } from 'react-icons/fa'

const MoviesCard = () => {
  
  return (
    <div className="">
      <div
        className="w-full h-screen bg-cover  "
        style={{ backgroundImage: `url(/header.jpg)` }}
      ></div>
      <Title text={"Yeni filmlər"} />
      <div className="grid grid-cols-5 mx-10 gap-5">
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>

        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
        <div className="w-56 flex  hover:cursor-pointer">
          <Card className=" bg-gray-900 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-base">Le Comte de Monte-Cristo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="relative group">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                  src="/movies/movie1.webp"
                  width={270}
                  height={300}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-4xl " />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-bold mt-2">Ölkə - Fransa</span>
                <span className="text-sm ml-auto font-bold mt-2">
                  Janr - Drama
                </span>
              </div>

              <small className="text-end">2024</small>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
