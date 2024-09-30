import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <div className="max-lg:flex flex-col items-center justify-center">
      <h3 className="font-poppins text-2xl max-sm:text-xl max-lg:text-center">
        My Name is
      </h3>
      <h1 className="font-rubik max-lg:text-center text-8xl tracking-tight md:name_underline text-primary max-sm:text-6xl ">
        Okoro Samuel Chika
      </h1>
      <TextRotator />
    </div>
  );
};
export default HeroTexts;
