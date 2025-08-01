import { useTranslation } from "react-i18next";
import placeholder from "../../assets/placeholder_img.jpg";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="w-full px-4 h-[46.875rem] bg-[radial-gradient(circle_at_top_right,_#ffe1fb,_#e1f4ff,_#fef6e4)] mt-14 pt-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 font-overpass">
        <div className="text-center md:text-left max-w-xl">
          <h2 className="flex flex-col md:text-7xl text-4xl font-bold mb-4 text-gray-900">
            {t("home.title")}
            <span> Marco Scherf</span>
          </h2>
          <span className="text-base text-gray-600">
            {t("home.title_description")}
          </span>
        </div>
        <div>
          <img
            src={placeholder}
            alt="placeholder"
            width={536}
            height={636}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
