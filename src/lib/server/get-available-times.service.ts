import { KeossIntegration } from './integrations/keoss/integration';

export async function getAvailableTimes() {
	const integration = new KeossIntegration();
	await integration.getAvailableTimes({ date: '2024-01-01', start: '10:00', end: '12:00' });
}
