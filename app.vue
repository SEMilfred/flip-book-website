<template>
	<aside
		id="page-buildup"
        class="h-full max-w-[min(90dvw/2,100dvh/2)] w-0 flex flex-shrink flex-grow justify-end"
    >
        <div class="h-full w-[min(90dvw,100dvh)] flex-shrink-0 bg-[rgb(240,240,240)] -z-1"></div>
    </aside>
	<AnimatedPage
		id="main"
		class="h-full w-[min(90dvw,100dvh)] flex-shrink flex-grow-0"
	>
		<NuxtPage/>
	</AnimatedPage>
</template>

<script setup>
import 'uno.css';
</script>

<style>
#__nuxt {
	@apply flex justify-center items-stretch py-10;
}

#page-buildup {
	box-shadow:
		inset -4.6px 0px 2.4px rgba(0, 0, 0, 0.019),
		inset -12.6px 0px 6.6px rgba(0, 0, 0, 0.031),
		inset -30.4px 0px 15.2px rgba(0, 0, 0, 0.046),
		inset -101px 0px 41px rgba(0, 0, 0, 0.08);
}

@keyframes squiggly-anim {
	0% {
	  filter: url("#filter-squiggly-0");
	}
	25% {
	  filter: url("#filter-squiggly-1");
	}
	50% {
	  filter: url("#filter-squiggly-2");
	}
	75% {
	  filter: url("#filter-squiggly-3");
	}
	100% {
	  filter: url("#filter-squiggly-4");
	}
  }
</style>
