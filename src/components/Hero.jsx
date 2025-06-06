import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen text-center flex flex-col gap-10 justify-center items-center max-w-[900px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">Fit</span>
        </h1>
      </div>
      <p className=" text-sm md:text-base font-light">
        I hereby acknowledgement that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous{" "}
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium">
          superheromass montrosity
        </span>
        , afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
