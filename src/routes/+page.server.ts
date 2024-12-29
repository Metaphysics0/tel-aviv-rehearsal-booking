import { KeossIntegration } from '$lib/server/integrations/keoss/integration';
import type { Actions } from './$types';

export const actions = {
	getAvailableTimes: async (event) => {
		const formData = await event.request.formData();
		const date = formData.get('date');
		const start = formData.get('start');
		const end = formData.get('end');

		if (!date || !start || !end) {
			return {
				success: false,
				message: 'Invalid date, start, or end'
			};
		}

		const integration = new KeossIntegration();

		await integration.getAvailableTimes({
			date: date as string,
			start: start as string,
			end: end as string
		});

		return {
			success: true,
			message: 'Available times fetched successfully'
		};
	}
} satisfies Actions;
