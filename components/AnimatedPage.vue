<template>
	<main
		ref="$el"
		class="c-animated-page"
		:class="`c-animated-page--${frame}`"
		@mousemove="isFlipping = true"
	>
		<div>
			<slot></slot>
		</div>

		<svg class="sr-only" xmlns="http://www.w3.org/2000/svg" version="1.1">
			<defs>
				<filter id="filter-squiggly-0">
					<feTurbulence id="filter-turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="0"/>
					<feDisplacementMap id="filter-displacement" in="SourceGraphic" in2="noise" scale="6" />
				</filter>
				<filter id="filter-squiggly-1">
					<feTurbulence id="filter-turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="1"/>
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
				</filter>
				<filter id="filter-squiggly-2">
					<feTurbulence id="filter-turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="2"/>
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
				</filter>
				<filter id="filter-squiggly-3">
					<feTurbulence id="filter-turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="3"/>
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
				</filter>
				<filter id="filter-squiggly-4">
					<feTurbulence id="filter-turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="4"/>
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
				</filter>
			</defs>
		</svg>

		<svg class="sr-only" xmlns="http://www.w3.org/2000/svg" version="1.1">
			<defs>
				<filter id="filter-squiggly-mild-0">
					<feTurbulence id="filter-turbulence-mild" baseFrequency="0.001" numOctaves="3" result="noise" seed="0"/>
					<feDisplacementMap id="filter-displacement-mild" in="SourceGraphic" in2="noise" scale="6" />
				</filter>
				<filter id="filter-squiggly-mild-1">
					<feTurbulence id="filter-turbulence-mild" baseFrequency="0.001" numOctaves="3" result="noise" seed="1"/>
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
				</filter>
				<filter id="filter-squiggly-mild-2">
					<feTurbulence id="filter-turbulence-mild" baseFrequency="0.001" numOctaves="3" result="noise" seed="2"/>
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
				</filter>
				<filter id="filter-squiggly-mild-3">
					<feTurbulence id="filter-turbulence-mild" baseFrequency="0.001" numOctaves="3" result="noise" seed="3"/>
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
				</filter>
				<filter id="filter-squiggly-mild-4">
					<feTurbulence id="filter-turbulence-mild" baseFrequency="0.001" numOctaves="3" result="noise" seed="4"/>
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
				</filter>
			</defs>
		</svg>
	</main>
</template>

<script setup>
const $el = ref(null);

let isFlipping = ref(false);
let frame = ref(0);
if (process.client) {
	updateFlipping();

	window.addEventListener("scroll", () => {
		isFlipping.value = true;
	}, true);
}

// Methods
function updateFlipping() {
	if (isFlipping.value) {
		document.body.classList.toggle("is-flipping");
		isFlipping.value = false;
		frame.value = (frame.value+1) % 5;
	} else {
		document.body.classList.remove("is-flipping");
	}
	window.setTimeout(() => {
		window.requestAnimationFrame(updateFlipping);
	}, 75);
}

// Provide data to other elements
provide({
	page: {
		isFlipping,
	},
})
</script>

<style>
.c-animated-page {
	@apply relative rounded-r-10;
	height: min(100%, 100dvh);
	perspective: 200dvh;
  	perspective-origin: middle center;
}
.c-animated-page > div {
	@apply relative bg-white overflow-x-hidden overflow-y-auto;
	@apply w-full h-full rounded-r-10 px-80 py-40;

	box-shadow:
		inset 4.6px 0px 2.4px rgba(0, 0, 0, 0.015),
		inset 12.6px 0px 6.6px rgba(0, 0, 0, 0.021),
		inset 30.4px 0px 15.2px rgba(0, 0, 0, 0.026),
		inset 101px 0px 41px rgba(0, 0, 0, 0.04),
		4.6px 0px 2.4px rgba(0, 0, 0, 0.019),
		12.6px 0px 6.6px rgba(0, 0, 0, 0.031),
		30.4px 0px 15.2px rgba(0, 0, 0, 0.046),
		101px 0px 41px rgba(0, 0, 0, 0.08);
}
.c-animated-page:after {
	content: '';
	@apply absolute left-0 top-0 w-full h-full bg-[rgb(235,225,240)] z-1000 opacity-0 pointer-events-none;
	transform-style: preserve-3d;
	transform-origin: 0 0 0;
	transform: rotateY(-30deg);
}

.c-animated-page--0 .u-squiggly {
	filter: url("#filter-squiggly-0");
}
.c-animated-page--1 .u-squiggly {
	filter: url("#filter-squiggly-1");
}
.c-animated-page--2 .u-squiggly {
	filter: url("#filter-squiggly-2");
}
.c-animated-page--3 .u-squiggly {
	filter: url("#filter-squiggly-3");
}
.c-animated-page--4 .u-squiggly {
	filter: url("#filter-squiggly-4");
}

.c-animated-page--0 .u-squiggly-mild {
	filter: url("#filter-squiggly-mild-0");
}
.c-animated-page--1 .u-squiggly-mild {
	filter: url("#filter-squiggly-mild-1");
}
.c-animated-page--2 .u-squiggly-mild {
	filter: url("#filter-squiggly-mild-2");
}
.c-animated-page--3 .u-squiggly-mild {
	filter: url("#filter-squiggly-mild-3");
}
.c-animated-page--4 .u-squiggly-mild {
	filter: url("#filter-squiggly-mild-4");
}

body.is-flipping .c-animated-page {
	@apply cursor-none relative;
}
body.is-flipping .c-animated-page:after {
	@apply opacity-100 bg-white;
	transition: transform ease-in 75ms, background 75ms;
	transform: rotateY(-180deg)
}

/* Hide scrollbar for Chrome, Safari and Opera */
.c-animated-page *::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.c-animated-page * {
	-ms-overflow-style: none;  /* IE and Edge */
	scrollbar-width: none;  /* Firefox */
}
</style>