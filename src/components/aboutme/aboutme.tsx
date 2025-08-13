import { useTranslation } from "react-i18next";
import meImg from "../../assets/me.webp";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4">
      <div
        id="about"
        className="flex flex-col-reverse lg:flex-row gap-3 max-w-6xl rounded-2xl w-full shadow-lg -mt-10 p-14 bg-white"
      >
        <img src={meImg} className="w-[424px] m-auto lg:w-auto rounded-2xl" />
        <div>
          <h2 className="text-4xl text-gray-900 mb-8 font-syne">
            {t("aboutMe.title", "Über mich")}
          </h2>
          <div className="flex flex-col gap-4 font-overpass">
            <p>{t("aboutMe.intro")}</p>
            <p>{t("aboutMe.philosophy")}</p>
            <p>{t("aboutMe.workStyle")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
