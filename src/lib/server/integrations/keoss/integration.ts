import { formatDateForKeoss } from '$lib/utils/date';
import { BaseIntegration } from '../base/integration';
import { KEOSS_LOCATION_ID, KEOSS_SERVICE_ID, KEOSS_SITE_ID } from './constants';

export class KeossIntegration extends BaseIntegration {
	async getAvailableTimes({ date, start, end }: { date: string; start: string; end: string }) {
		const response = await fetch(`https://yoman.co.il/${KEOSS_SITE_ID}/GetTimeSelection`, {
			headers: this.headers,
			referrer: 'https://yoman.co.il/keoss',
			referrerPolicy: 'strict-origin-when-cross-origin',
			body: this.getRequestBody({ date }),
			method: 'POST',
			mode: 'cors',
			credentials: 'include'
		});

		const responseText = await response.text();

		console.log(responseText);

		console.log('PWD', process.cwd());

		// await writeFile(`temp/${date}.html`, responseText);
	}

	private get headers() {
		return {
			accept: 'text/html, */*; q=0.01',
			'accept-language': 'en-US,en;q=0.9',
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"macOS"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'x-requested-with': 'XMLHttpRequest'
		};
	}

	private getRequestBody({ date }: { date: string }) {
		const formData = new FormData();

		formData.append('siteID', KEOSS_SITE_ID);
		formData.append('dt', formatDateForKeoss(date));
		formData.append('services[]', KEOSS_SERVICE_ID);
		formData.append('displayType', '1');
		formData.append('specifiedDT', 'false');
		formData.append('hasGooglePixEvent', 'false');
		formData.append('isFirstLoad', 'false');
		formData.append('duration', '120');
		formData.append('isCalClick', 'false');
		formData.append('isPrevClick', 'false');
		formData.append('locationID', KEOSS_LOCATION_ID);

		return new URLSearchParams(formData as any).toString();
	}
}
