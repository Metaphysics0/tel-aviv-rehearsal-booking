<div class="container h-full mx-auto flex justify-center items-center">
	<form class="space-y-5 p-5" method="POST" action="?/getAvailableTimes">
		<h1 class="h1 mb-3">Tel Aviv Rehearsal Booker</h1>
		<input class="input" title="Date" type="date" name="date" />

		<div class="flex gap-2 justify-between mb-10">
			<label for="start-time" class="flex-1">
				<span class="text-lg">From</span>
				<input class="input" title="Start Time" type="time" name="start" />
			</label>
			<label for="end-time" class="flex-1">
				<span>Until</span>
				<input class="input" title="End Time" type="time" name="end" />
			</label>
		</div>

		<div class="flex justify-center">
			<button type="submit" class="btn variant-filled">Get Available Times</button>
		</div>
	</form>
</div>
