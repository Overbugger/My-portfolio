import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <div className="max-lg:flex flex-col items-center justify-center">
      <h3 className="font-poppins text-2xl max-sm:text-xl max-lg:text-center">
        My Name is
      </h3>
      <h1 className="font-rubik text-center lg:text-left text-5xl name_underline lg:text-8xl tracking-tight text-primary">
        Okoro Samuel <br /> Chika
      </h1>
      <TextRotator />
    </div>
  );
};
export default HeroTexts;
