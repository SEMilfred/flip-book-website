import { defineConfig } from 'unocss';
import { presetCore } from './assets/js/unocss/preset-core';
import presetNoDefaultRem from './assets/js/unocss/preset-no-default-rem';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
	presets: [presetCore(), presetNoDefaultRem()],
	transformers: [transformerVariantGroup(), transformerDirectives()],

	theme: {
		colors: {
			background: '#bbb5bd',
			white: '#f4f0f5',
			black: '#0d0314',

			blue: '#111270',
		},
	},
});
