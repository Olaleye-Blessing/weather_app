import axios, { isAxiosError } from "axios";
import { IForecast, IToday } from "../interfaces/weather";
import { filterForecasts } from "../utils/weather";

const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY as string;

interface Data {
	today: IToday;
	forecasts: IForecast[];
}

export const getForecasts = async (query: string) => {
	const baseUrl = "https://api.openweathermap.org/data/2.5";
	// Comment 1
	const searchParams = new URLSearchParams({
		q: query,
		units: "metric",
		appid: WEATHER_KEY,
	}).toString();

	const urls = [
		`${baseUrl}/weather?${searchParams}`,
		`${baseUrl}/forecast?${searchParams}`,
	];

	try {
		const requests = urls.map((url) => axios.get(url));

		// Comment 2
		const responses = await Promise.all(requests);

		const [today, forecasts] = responses.map((response) => response.data);

		const data: Data = {
			today,
			forecasts: filterForecasts(forecasts.list),
		};

		return data;
	} catch (error) {
		let message = "Unknown error";

		if (isAxiosError(error)) {
			message =
				error.message === "Network Error"
					? "Please! Check your internet connection"
					: "Location not found";
		}

		throw new Error(message);
	}
};
