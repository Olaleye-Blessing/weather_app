import { FC, useEffect, useRef } from "react";
import { ClockIcon } from "@heroicons/react/20/solid";

const modalHeight = "!h-[calc(100vh-2.75rem)]"

interface Props {
  fetchForecasts: (query: string) => Promise<void>;
}

const Histories: FC<Props> = ({ fetchForecasts }) => {
  const locations: string[] = JSON.parse(localStorage.getItem("locations") || "[]");
  const ulRef = useRef<HTMLDivElement>(null);

  const toggleUl = () => {
    const { current: container } = ulRef;

    if (!container) return;

    container.classList.toggle("!w-screen");
    container.classList.toggle(modalHeight);
  };

  useEffect(() => {
    const closeUIModal = () => {
      const { current: container } = ulRef;

      if (!container) return;

      container.classList.remove("!w-screen");
      container.classList.remove(modalHeight);
    }

    window.addEventListener("click", closeUIModal);

    return () => window.removeEventListener("click", closeUIModal)
  }, [])

  return (
    <div className="relative">
      <button type="button" onClick={(e) => {
        e.stopPropagation();
        toggleUl();
      }}>
        <ClockIcon className="h-6 w-6" />
      </button>
      <div
        ref={ulRef}
        className="absolute top-8 right-0 z-10 overflow-hidden h-0 w-0 bg-white transition-all duration-300 ease-in-out flex items-start justify-end pl-3 bg-opacity-5"
      >
        <div className="w-full max-w-[15rem]" onClick={e => {
          e.stopPropagation();
        }}>
          {locations.length === 0 ? (
            <p className="text-center text-gray-700 font-extrabold">
              No history
            </p>
          ) : (
            <ul className="bg-white shadow-xl rounded-lg overflow-y-auto h-full max-w-[15rem] max-h-60">
              {locations.map((location) => (
                <li
                  key={location}
                  className="flex items-center justify-between"
                >
                  <button
                    className="text-ellipsis text-left overflow-hidden whitespace-nowrap px-4 py-2 hover:bg-gray-500 transition-colors duration-150 w-full"
                    type="button"
                    onClick={() => fetchForecasts(location)}
                  >
                    {location}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Histories;
