import { IForecast } from "../interfaces/weather";

export const filterForecasts = (data: IForecast[]) =>
	data.filter((list) => list.dt_txt.indexOf("00:00:00") != -1);

export const windDirection = (deg: number) => {
	if (deg === 0) return "N";

	if (deg > 0 && deg < 90) return "NE";

	if (deg === 90) return "E";

	if (deg > 90 && deg < 180) return "SE";

	if (deg === 180) return "S";

	if (deg > 180 && deg < 270) return "SW";

	if (deg === 270) return "W";

	if (deg > 270 && deg < 360) return "NW";

	return "N";
};

export const persistLocation = (location: string) => {
	const locations = localStorage.getItem("locations");

	if (!locations) {
		localStorage.setItem("locations", JSON.stringify([location]));
		return;
	}

	const parsedLocations: string[] = JSON.parse(locations);

	if (parsedLocations.includes(location)) return;

	localStorage.setItem(
		"locations",
		JSON.stringify([...parsedLocations, location])
	);
};
