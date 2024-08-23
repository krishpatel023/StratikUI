import type { IconProps } from "@registry/utils/types";

export type LogoProps = {
	name: string;
	logo: (props: IconProps) => JSX.Element;
};

export const Logo: LogoProps[] = [
	{
		name: "Apple",
		logo: (props) => (
			<svg
				fill="currentColor"
				viewBox="-52.01 0 560.035 560.035"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<title>Apple Logo</title>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
				</g>
			</svg>
		),
	},
	{
		name: "AirBnB",
		logo: (props) => (
			<svg
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				{...props}
			>
				<title>AirBnB Logo</title>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" {...props} />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<g fill="currentColor">
						<path d="M156.633 104.602c-.039-3.504-.859-6.964-2.137-10.214-.986-2.516-2.131-4.966-3.249-7.425a1407.959 1407.959 0 0 0-28.003-57.54c-1.374-2.65-2.719-5.316-4.17-7.925-1.426-2.545-3.086-4.995-5.235-6.987-3.429-3.269-8.03-5.218-12.752-5.512h-2.174c-4.861.24-9.606 2.28-13.094 5.68-2.07 1.961-3.672 4.352-5.06 6.826-1.432 2.566-2.758 5.19-4.106 7.798a1418.216 1418.216 0 0 0-19.084 38.464c-3.676 7.73-7.321 15.473-10.827 23.279-1.454 3.252-2.769 6.615-3.264 10.165-.917 5.994.398 12.285 3.6 17.432 2.76 4.471 6.903 8.074 11.732 10.155a26.434 26.434 0 0 0 11.983 2.121c5.483-.291 10.77-2.261 15.409-5.136 5.175-3.176 9.601-7.4 13.722-11.822 3.832 4.13 7.933 8.071 12.667 11.16 4.572 3.008 9.785 5.186 15.268 5.704 5.955.622 12.125-.854 17.123-4.169a26.096 26.096 0 0 0 9.814-12.059 25.814 25.814 0 0 0 1.837-9.995zm-56.684-2.312c-1.495-1.76-2.812-3.664-4.135-5.554-2.226-3.265-4.25-6.678-5.878-10.284-1.334-2.992-2.405-6.133-2.823-9.395-.305-2.588-.232-5.288.718-7.745.85-2.304 2.484-4.3 4.554-5.619 4.932-3.183 11.962-2.839 16.431 1.022 2.262 1.927 3.613 4.776 3.953 7.704.445 3.892-.44 7.801-1.799 11.431-2.566 6.736-6.628 12.774-11.021 18.44zm48.393 8.255c-1.318 4.549-4.486 8.523-8.631 10.816-3.674 2.055-8.059 2.759-12.201 2.067-5.275-.821-10.008-3.62-14.109-6.924-3.014-2.422-5.728-5.19-8.328-8.043 4.105-5.192 7.972-10.624 10.926-16.562 2.578-5.2 4.537-10.834 4.723-16.681.105-3.71-.593-7.488-2.326-10.791-2.269-4.413-6.334-7.803-10.994-9.443-4.353-1.555-9.192-1.694-13.633-.428-4.188 1.185-8.013 3.702-10.634 7.191-2.307 3.042-3.622 6.782-3.927 10.575-.469 5.463.9 10.913 2.971 15.935 3.079 7.338 7.598 13.98 12.589 20.141a68.79 68.79 0 0 1-7.306 7.26c-4.052 3.429-8.688 6.414-13.94 7.55-4.246.953-8.827.479-12.721-1.491-4.561-2.273-8.063-6.554-9.384-11.475-1.01-3.615-.786-7.518.415-11.059.999-2.93 2.354-5.722 3.622-8.541a1408.352 1408.352 0 0 1 27.689-56.927c1.44-2.793 2.858-5.599 4.382-8.346 1.244-2.213 2.691-4.386 4.736-5.94a12.244 12.244 0 0 1 7.749-2.583c2.88-.034 5.743 1.027 7.946 2.878 2.176 1.807 3.646 4.279 4.966 6.743 2.984 5.605 5.85 11.275 8.717 16.939a1379.995 1379.995 0 0 1 23.582 49.054c1.139 2.564 2.358 5.108 3.125 7.814.937 3.337.968 6.941-.004 10.271zM57.249 146.038c2.464-.558 5.156 1.067 5.796 3.513.795 2.503-.785 5.413-3.301 6.137-2.458.864-5.377-.638-6.191-3.092-.772-2.068.054-4.564 1.888-5.787a5.09 5.09 0 0 1 1.808-.771zM73.891 162.195c1.484-1.613 3.575-2.624 5.729-2.946a13.452 13.452 0 0 1 4.295.272c-.018 2.271-.004 4.539-.008 6.811-2.209-.571-4.601-.689-6.769.109a8.062 8.062 0 0 0-3.1 2.037c-.186.159-.141.416-.158.637.013 6.345-.01 12.691.009 19.035-.022.244.037.519-.071.748-2.45.057-4.903.011-7.354.02.001-9.673-.008-19.348.006-29.021 2.064.009 4.129-.008 6.194.004.454-.026.938.207 1.104.65.163.53.111 1.095.123 1.644zM126.719 162.221c1.961-2.029 4.803-3.027 7.592-3.033 2.947-.074 5.967.797 8.244 2.709a8.97 8.97 0 0 1 3.115 4.687c.648 2.261.59 4.636.582 6.965.002 5.124 0 10.249.002 15.374-2.471-.004-4.941.016-7.412-.011.002-5.121 0-10.242.002-15.365 0-1.903.09-3.956-.922-5.651-.705-1.216-2.1-1.822-3.445-1.963-2.562-.41-5.238.609-7.004 2.477-.188.188-.349.426-.328.71-.024.792.096 1.587.028 2.38-.097 1.077.054 2.154.019 3.234a214.498 214.498 0 0 0-.008 6.109c-.14 2.693.104 5.395-.057 8.085-2.461-.008-4.92-.002-7.381-.003-.001-9.678-.018-19.354.009-29.031 1.903.015 3.81 0 5.712.006.492-.031 1.03.244 1.157.744.116.514.081 1.049.095 1.577zM54.539 188.924c-.001-9.677-.015-19.353.005-29.029 2.452.006 4.903.004 7.354.002.019 9.676.005 19.352.007 29.026-2.455 0-4.91-.002-7.366.001zM49.972 159.898c-1.943-.004-3.886.006-5.831-.011-.514-.003-1.17.022-1.421.562-.225.555-.139 1.171-.159 1.755-1.617-1.721-3.896-2.743-6.234-2.965-3.61-.324-7.351.677-10.25 2.869-2.388 1.764-4.153 4.315-5.077 7.125-.445 1.317-.668 2.699-.81 4.08v1.987c.207 4.159 2.057 8.273 5.284 10.954 2.434 2.062 5.562 3.214 8.731 3.415h1.652c2.512-.169 4.992-1.208 6.706-3.08.016.587-.067 1.209.153 1.771.229.455.769.58 1.238.562 2.005-.005 4.013.002 6.02-.009 0-9.669.006-19.342-.002-29.015zm-7.638 19.983c-1.5 1.796-3.843 2.858-6.183 2.784-2.508.019-5.111-.942-6.736-2.909-1.585-1.878-2.064-4.49-1.704-6.877.269-1.932 1.254-3.785 2.81-4.984 1.411-1.114 3.19-1.688 4.971-1.812 2.653-.232 5.45.938 7.046 3.08.09 3.154.002 6.316.042 9.475-.026.416.089.917-.246 1.243zM115.51 168.201c-1.142-2.793-3.168-5.221-5.736-6.805-2.645-1.646-5.817-2.39-8.918-2.179-2.449.161-4.842 1.206-6.542 2.992-.01-5.421 0-10.839-.005-16.26-2.472.001-4.946-.011-7.418.007.013 14.318-.021 28.643.018 42.96 2.047.005 4.096.01 6.144.005.509.04 1.058-.24 1.198-.755.101-.524.064-1.065.067-1.596 1.718 1.911 4.242 2.948 6.78 3.101h1.514c4.109-.206 8.138-2.132 10.717-5.361 3.612-4.429 4.317-10.867 2.181-16.109zm-8.645 12.214c-1.656 1.537-3.948 2.274-6.186 2.252-2.335.054-4.668-1.019-6.147-2.826-.183-.188-.243-.442-.228-.692.002-3.322.005-6.643 0-9.963 1.42-1.852 3.693-3.006 6.018-3.125 2.357-.069 4.83.623 6.56 2.285 1.648 1.529 2.452 3.822 2.4 6.043.048 2.218-.778 4.496-2.417 6.026zM176.503 164.609c-3.144-4.004-8.519-6.024-13.53-5.275-2.093.33-4.076 1.334-5.539 2.874-.016-5.418 0-10.836-.008-16.256-2.468-.003-4.934-.005-7.4.002-.002 14.319 0 28.642 0 42.963 1.945.015 3.895-.003 5.84.015.511.008 1.15-.033 1.412-.555.227-.564.142-1.193.158-1.786 1.705 1.868 4.174 2.9 6.672 3.082h1.666c4.064-.221 8.037-2.118 10.611-5.298 2.102-2.536 3.236-5.784 3.424-9.055v-1.941c-.233-3.158-1.299-6.294-3.306-8.77zm-5.776 14.972c-1.957 2.519-5.41 3.456-8.473 2.967-1.865-.372-3.674-1.379-4.777-2.951-.123-1.219-.012-2.452-.049-3.677.026-2.253-.056-4.513.037-6.762 1.122-1.547 2.918-2.539 4.766-2.949 3.42-.632 7.396.723 9.125 3.881 1.574 2.923 1.417 6.829-.629 9.491z" />
					</g>
				</g>
			</svg>
		),
	},
	{
		name: "React",
		logo: (props) => (
			<svg
				viewBox="-3 0 262 262"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid"
				fill="#000000"
				{...props}
			>
				<title>React Logo</title>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<path
						d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
						fill="#4285F4"
					/>
					<path
						d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
						fill="#34A853"
					/>
					<path
						d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
						fill="#FBBC05"
					/>
					<path
						d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
						fill="#EB4335"
					/>
				</g>
			</svg>
		),
	},
	{
		name: "Messenger",
		logo: (props) => (
			<svg
				viewBox="48.61 50.201 402.77399999999994 402.77399999999994"
				xmlns="http://www.w3.org/2000/svg"
				fill="#000000"
				{...props}
			>
				<title>Messenger Logo</title>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100.001%">
						<stop offset="0" stopColor="#00b2ff" />
						<stop offset="1" stopColor="#006aff" />
					</linearGradient>
					<g fill="none" fillRule="evenodd">
						<path
							d="M250 50.201c-112.676 0-200 82.452-200 193.81 0 58.25 23.903 108.582 62.817 143.356 3.26 2.935 5.231 6.995 5.392 11.377l1.087 35.537c.362 11.337 12.072 18.694 22.455 14.151l39.678-17.487a15.974 15.974 0 0 1 10.664-.804c18.229 5.025 37.666 7.678 57.907 7.678 112.676 0 200-82.452 200-193.809S362.676 50.201 250 50.201z"
							fill="url(#a)"
						/>
						<path
							d="M129.92 300.693l58.752-93.105c9.336-14.794 29.376-18.493 43.38-8l46.72 35.015a12.022 12.022 0 0 0 14.447-.04l63.099-47.84c8.41-6.391 19.437 3.7 13.762 12.624l-58.712 93.065c-9.336 14.794-29.376 18.493-43.38 8l-46.72-35.015a12.022 12.022 0 0 0-14.447.04l-63.139 47.88c-8.41 6.392-19.437-3.699-13.762-12.624z"
							fill="#ffffff"
						/>
					</g>
				</g>
			</svg>
		),
	},
	{
		name: "Adobe",
		logo: (props) => (
			<svg
				height="200px"
				width="200px"
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 511.998 511.998"
				xmlSpace="preserve"
				fill="#000000"
				{...props}
			>
				<title>Adobe Logo</title>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<path
						fill="#DA143A"
						d="M418.385,294.183c-31.939,0-71.91,5.571-84.985,7.531c-54.122-56.518-69.52-88.644-72.983-97.209 c4.694-12.06,21.025-57.874,23.346-116.715c1.145-29.46-5.079-51.473-18.501-65.427c-13.4-13.931-29.618-15.015-34.269-15.015 c-16.308,0-43.665,8.247-43.665,63.47c0,47.915,22.34,98.758,28.515,111.895c-32.535,94.733-67.465,159.582-74.882,172.921 C10.223,404.857,0,452.45,0,465.939c0,24.239,17.263,38.71,46.177,38.71c70.251,0,134.36-117.945,144.96-138.425 c49.895-19.88,116.677-32.193,133.653-35.131c48.696,46.386,105.015,58.763,128.401,58.763c17.596,0,58.806,0,58.806-42.369 C512,308.142,461.571,294.183,418.385,294.183z M414.999,321.998c37.946,0,47.974,12.549,47.974,19.184 c0,4.164-1.581,17.748-21.92,17.748c-18.239,0-49.728-10.541-80.711-33.412C373.263,323.819,392.382,321.998,414.999,321.998z M228.999,34.31c3.46,0,5.738,1.112,7.616,3.716c10.914,15.144,2.114,64.626-8.597,103.348 c-10.339-33.202-18.098-84.148-7.181-102.071C222.971,35.804,225.41,34.31,228.999,34.31z M210.571,330.697 c13.738-27.754,29.136-68.2,37.523-91.078c16.784,28.094,39.358,54.175,52.414,68.316 C259.857,316.506,229.1,325.066,210.571,330.697z M27.29,469.642c-0.905-1.072-1.039-3.336-0.357-6.053 c1.43-5.693,12.361-33.913,91.418-69.277c-11.32,17.831-29.017,43.31-48.458,62.342c-13.685,12.81-24.341,19.304-31.673,19.304 C35.597,475.958,31.983,475.241,27.29,469.642z"
					/>
				</g>
			</svg>
		),
	},
	{
		name: "Windows",
		logo: (props) => (
			<svg
				viewBox="-0.5 0 257 257"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid"
				fill="#000000"
				{...props}
			>
				<title>Windows Logo</title>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<path
						d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z"
						fill="#00ADEF"
					/>
				</g>
			</svg>
		),
	},
	{
		name: "Mastercard",
		logo: (props) => (
			<svg
				viewBox="-2.45 0 2452.5 2452.5"
				enableBackground="new 0 0 2447.6 2452.5"
				xmlns="http://www.w3.org/2000/svg"
				fill="#000000"
				{...props}
			>
				<title>Mastercard Logo</title>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<g clipRule="evenodd" fillRule="evenodd">
						<path
							d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
							fill="#36c5f0"
						/>
						<path
							d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
							fill="#2eb67d"
						/>
						<path
							d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
							fill="#ecb22e"
						/>
						<path
							d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
							fill="#e01e5a"
						/>
					</g>
				</g>
			</svg>
		),
	},
];
