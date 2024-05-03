import MemberSlider from "./MemberSlider";
import SimpleSlider from "./Slider";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#282c34]">
      <header className="w-full h-1/5 py-4 bg-orange-400"></header>

      <h1 className="text-white text-2xl">Introduce about Jet Fighter</h1>
      <p className="text-white text-sm mb-4 mt-4">
        Jet fighter is a game about fighting between jets
      </p>
      <p className="text-white text-sm mb-4 mt-4">
        Read installation via{" "}
        <a
          href="https://github.com/NgKhacDuy/ma-nguon-mo"
          className="text-blue-400 cursor-pointer"
        >
          this link
        </a>
      </p>
      <SimpleSlider />
      <MemberSlider />
    </div>
  );
}
