import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
 
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        Sobre mí
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            Soy <span className="text-yellow-600">Samir Alanya, </span> 
 un desarrollador web
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            Un apasionado programador front-end con un amor por la creación de experiencias web excepcionales. Me dedico a dar vida a diseños creativos y funcionales, convirtiendo ideas en sitios web y aplicaciones que cautivan a los usuarios. Desde que me adentré en el mundo del desarrollo web, me he obsesionado con la intersección entre el diseño y la tecnología. Mi enfoque se basa en la estética, la usabilidad y el rendimiento. Siempre estoy en búsqueda de la combinación perfecta entre la belleza visual y la eficiencia técnica.

Mi conjunto de habilidades incluye:

HTML, CSS y JavaScript: Trabajo con estas tecnologías para crear diseños atractivos y funcionales que se adaptan a diversos dispositivos y tamaños de pantalla.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            Frameworks Front-end: Utilizo frameworks como React para crear aplicaciones web interactivas y dinámicas.

Diseño Responsivo: Aseguro que mis proyectos sean accesibles y se vean impresionantes en cualquier dispositivo, desde smartphones hasta pantallas de escritorio.
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/CV-Samir Brian Alanya Escobar.pdf")}
              download={"CV-Samir Brian Alanya Escobar.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
