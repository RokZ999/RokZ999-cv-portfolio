
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #a855f7 
		"--color-primary-50": "242 230 254", // #f2e6fe
		"--color-primary-100": "238 221 253", // #eeddfd
		"--color-primary-200": "233 213 253", // #e9d5fd
		"--color-primary-300": "220 187 252", // #dcbbfc
		"--color-primary-400": "194 136 249", // #c288f9
		"--color-primary-500": "168 85 247", // #a855f7
		"--color-primary-600": "151 77 222", // #974dde
		"--color-primary-700": "126 64 185", // #7e40b9
		"--color-primary-800": "101 51 148", // #653394
		"--color-primary-900": "82 42 121", // #522a79
		// secondary | #96d1c9 
		"--color-secondary-50": "239 248 247", // #eff8f7
		"--color-secondary-100": "234 246 244", // #eaf6f4
		"--color-secondary-200": "229 244 242", // #e5f4f2
		"--color-secondary-300": "213 237 233", // #d5ede9
		"--color-secondary-400": "182 223 217", // #b6dfd9
		"--color-secondary-500": "150 209 201", // #96d1c9
		"--color-secondary-600": "135 188 181", // #87bcb5
		"--color-secondary-700": "113 157 151", // #719d97
		"--color-secondary-800": "90 125 121", // #5a7d79
		"--color-secondary-900": "74 102 98", // #4a6662
		// tertiary | #c0d5a9 
		"--color-tertiary-50": "246 249 242", // #f6f9f2
		"--color-tertiary-100": "242 247 238", // #f2f7ee
		"--color-tertiary-200": "239 245 234", // #eff5ea
		"--color-tertiary-300": "230 238 221", // #e6eedd
		"--color-tertiary-400": "211 226 195", // #d3e2c3
		"--color-tertiary-500": "192 213 169", // #c0d5a9
		"--color-tertiary-600": "173 192 152", // #adc098
		"--color-tertiary-700": "144 160 127", // #90a07f
		"--color-tertiary-800": "115 128 101", // #738065
		"--color-tertiary-900": "94 104 83", // #5e6853
		// success | #37fb5e 
		"--color-success-50": "225 254 231", // #e1fee7
		"--color-success-100": "215 254 223", // #d7fedf
		"--color-success-200": "205 254 215", // #cdfed7
		"--color-success-300": "175 253 191", // #affdbf
		"--color-success-400": "115 252 142", // #73fc8e
		"--color-success-500": "55 251 94", // #37fb5e
		"--color-success-600": "50 226 85", // #32e255
		"--color-success-700": "41 188 71", // #29bc47
		"--color-success-800": "33 151 56", // #219738
		"--color-success-900": "27 123 46", // #1b7b2e
		// warning | #7B1FA2 
		"--color-warning-50": "235 221 241", // #ebddf1
		"--color-warning-100": "229 210 236", // #e5d2ec
		"--color-warning-200": "222 199 232", // #dec7e8
		"--color-warning-300": "202 165 218", // #caa5da
		"--color-warning-400": "163 98 190", // #a362be
		"--color-warning-500": "123 31 162", // #7B1FA2
		"--color-warning-600": "111 28 146", // #6f1c92
		"--color-warning-700": "92 23 122", // #5c177a
		"--color-warning-800": "74 19 97", // #4a1361
		"--color-warning-900": "60 15 79", // #3c0f4f
		// error | #ff2e2e 
		"--color-error-50": "255 224 224", // #ffe0e0
		"--color-error-100": "255 213 213", // #ffd5d5
		"--color-error-200": "255 203 203", // #ffcbcb
		"--color-error-300": "255 171 171", // #ffabab
		"--color-error-400": "255 109 109", // #ff6d6d
		"--color-error-500": "255 46 46", // #ff2e2e
		"--color-error-600": "230 41 41", // #e62929
		"--color-error-700": "191 35 35", // #bf2323
		"--color-error-800": "153 28 28", // #991c1c
		"--color-error-900": "125 23 23", // #7d1717
		// surface | #171717 
		"--color-surface-50": "220 220 220", // #dcdcdc
		"--color-surface-100": "209 209 209", // #d1d1d1
		"--color-surface-200": "197 197 197", // #c5c5c5
		"--color-surface-300": "162 162 162", // #a2a2a2
		"--color-surface-400": "93 93 93", // #5d5d5d
		"--color-surface-500": "23 23 23", // #171717
		"--color-surface-600": "21 21 21", // #151515
		"--color-surface-700": "17 17 17", // #111111
		"--color-surface-800": "14 14 14", // #0e0e0e
		"--color-surface-900": "11 11 11", // #0b0b0b
		
	}
}