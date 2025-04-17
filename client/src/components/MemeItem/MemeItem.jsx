import { Card, CardHeader, CardBody, Image } from '@heroui/react';

const MemeItem = ({ meme }) => {
  const { title, img, likes } = meme;

  return (
    <>
      <Card className="py-4 h-[400px] flex flex-col justify-between">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center gap-3">
          <h4 className="font-bold text-[18px] text-center">{title}</h4>
          <a
            href={img}
            target="_blank"
            className="text-tiny uppercase font-bold underline hover:text-blue-300 transition-colors duration-300"
          >
            Show image
          </a>
          <small className="text-[14px]">{`likes: ${likes}`}</small>
        </CardHeader>
        <CardBody className="overflow-hidden py-2 flex-none items-center">
          <Image
            alt="Card background"
            className="object-contain rounded-xl h-[250px]"
            src={img}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default MemeItem;
