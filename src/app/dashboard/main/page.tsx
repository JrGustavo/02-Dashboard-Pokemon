import {SimpleWidget} from "@/components";

export default function MainPage() {
  return (
      <div>
          <div className="text-black p-2 ">
          <h1 className="mt-2 text-3xl">Dashboard</h1>
          <h1 className="text-xl">Información general</h1>

              <div className="flex flex-wrap p-2">
                  <SimpleWidget/>
              </div>

          </div>
      </div>
  );
}