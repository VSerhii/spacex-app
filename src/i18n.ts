import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			"Mission name": "Mission name",
			"Rocket name": "Rocket name",
			"Date": "Date",
			"Status": "Status",
			"Video": "Video",
			"Watch": "Watch",
			"no info": "no info",
			"Successful": "Successful",
			"Unsuccessful": "Unsuccessful"
		}
	},
	sk: {
		translation: {
			"Mission name": "Nazov missie",
			"Rocket name": "Nazov rakety",
			"Date": "Datum",
			"Status": "Status",
			"Video": "Video",
			"Watch": "Prehrat",
			"no info": "bez informacie",
			"Successful": "Uspesny",
			"Unsuccessful": "Neuspesny"
		}
	}
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: "en",
		fallbackLng: ['en', 'sk'],
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;