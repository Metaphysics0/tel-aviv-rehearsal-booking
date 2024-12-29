export abstract class BaseIntegration {
	abstract getAvailableTimes({
		date,
		start,
		end
	}: {
		date: string;
		start: string;
		end: string;
	}): Promise<void>;
}
