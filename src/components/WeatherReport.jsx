function WeatherReport(props) {
  return (
    <section className="mt-10">
      <div className="weather gap-10 flex justify-center sm:gap-32 mb-5">
        <div className="w-32 space-y-[3px] py-2 px-4 bg-slate-700 sm:px-5 sm:w-36 rounded-xl  sm:py-2">
          <p className="  text-sky-200 text-[11px] font-bold  ">CLOUD</p>
          <p className=" text-zinc-50 font-bold text-md ">{props.data.cloud}</p>
        </div>
        <div className=" w-32 py-2 space-y-[3px] px-4 bg-slate-700  sm:w-36 sm:px-5 rounded-xl sm:py-2">
          <p className="  text-sky-200 text-[11px] font-bold  ">WIND</p>
          <p className="text-zinc-50 text-md  font-bold ">
            {props.data.wind} km/h
          </p>
        </div>
      </div>
      <div className="weather gap-10 flex justify-center sm:gap-32  mb-5">
        <div className="w-32 py-2 px-4 space-y-[3px] bg-slate-700  sm:w-36 sm:px-5 rounded-xl sm:py-2">
          <p className="  text-sky-200 text-[11px] font-bold  ">HUMIDITY</p>
          <p className=" text-zinc-50 text-md font-bold  ">
            {props.data.humidity}%
          </p>
        </div>
        <div className="w-32 py-2 px-4 space-y-[3px] bg-slate-700  sm:w-36 sm:px-5 rounded-xl sm:py-2">
          <p className="  text-sky-200 text-[11px] font-bold  ">VISIBLITY</p>
          <p className=" text-zinc-50 font-bold text-md ">
            {props.data.visibility / 1000} km
          </p>
        </div>
      </div>
      <div className="weather flex gap-10 justify-center sm:gap-32  mb-5">
        <div className="w-32 space-y-[3px] py-2 px-4 bg-slate-700  sm:w-36 sm:px-5 rounded-xl sm:py-2">
          <p className="  text-sky-200  text-[11px] font-bold  ">PRESSURE</p>
          <p className="  text-zinc-50 text-md  font-bold ">
            {props.data.pressure} hpa
          </p>
        </div>
        <div className="w-32 space-y-[3px] py-2 px-4 bg-slate-700  sm:w-36 sm:px-5 rounded-xl sm:py-2">
          <p className=" mr-2 text-sky-200 text-[11px] font-bold  ">
            FEELS LIKE
          </p>
          <p className=" text-zinc-50 text-md font-bold  ">
            {props.data.feelslike}℃
          </p>
        </div>
      </div>
    </section>
  );
}

export default WeatherReport;
