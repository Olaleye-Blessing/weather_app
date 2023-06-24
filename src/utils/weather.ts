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
