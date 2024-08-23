import type { IconProps } from "@/utils/constants";

export default function JSX_TSX() {
	return (
		<div className="flex gap-4">
			<JsxIcon className="w-12 h-12 group-data-[visible=true]/bento-card:text-yellow-400 group-hover/bento-card:text-yellow-400 transition-colors duration-300 delay-300" />
			<TsxIcon className="w-12 h-12 group-data-[visible=true]/bento-card:text-sky-600 group-hover/bento-card:text-sky-600 transition-colors duration-300 delay-300" />

			{/* <div className="relative">
        <JsxIcon className="w-12 h-12 text-neutral-800 dark:text-neutral-400 group-hover/bento-card:text-background z-30 transition-all duration-500 delay-300" />
        <div className="min-w-full min-h-full scale-0 group-hover/bento-card:scale-[101%] bg-yellow-500 dark:bg-yellow-200 blur-[10px] opacity-90 absolute top-0 left-0 -z-50 transition-all duration-300 delay-300"></div>
      </div>

      <div className="relative">
        <TsxIcon className="w-12 h-12 text-neutral-800 dark:text-neutral-400 group-hover/bento-card:text-background z-30 transition-all duration-500 delay-300" />
        <div className="min-w-full min-h-full scale-0 group-hover/bento-card:scale-[102%] bg-sky-300 blur-[10px] opacity-90 absolute top-0 left-0 -z-50 transition-all duration-300 delay-300"></div>
      </div> */}
		</div>
	);
}

export const JsxIcon = (props: IconProps) => (
	<svg
		height="200"
		width="200"
		viewBox="0 0 512 512"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<title>JSX Logo</title>
		<path
			d="M454.528.002H57.47C27.103-.228.404 23.534.001 57.471v397.058c.404 33.937 27.102 57.698 57.469 57.469h397.058c39.276-.56 56.791-30.222 57.472-57.469V57.471C511.32 30.224 493.805.56 454.528.002zM155.886 415.331c-3.998 29.688-22.571 49.07-56.68 50.031c-26.581.75-48.166-10.729-61.578-36.037l32.189-19.593c.005.01 8.486 15.307 17.58 18.456c4.805 1.664 14.87 2.274 21.43-2.012c5.992-3.913 7.873-14.344 7.873-14.344v-141.35h39.186V415.33zm128.558 42.286c-31.375 13.922-87.052 8.848-106.166-33.191l31.488-18.194c15.745 29.915 56.579 29.843 64.595 10.141c7.83-19.238-15.788-26.76-45.097-39.757c-12.747-6.574-32.472-16.927-38.393-42.226c-4.467-19.09-.48-47.938 29.39-61.112l.003.002c41.43-15.204 73.24 4.199 82.57 26.59l-30.09 19.594c-4.449-8.028-13.93-16.237-24.875-16.824c-9.926-.533-19.154 4.656-19.449 18.08c.59 19.56 26.31 19.558 57.153 39.096c22.595 14.313 26.826 25.253 28.916 45.027c1.548 14.656-1.21 39.979-30.045 52.774zm152.743 6.694l-37.786-67.176l-37.787 67.177h-38.486l54.58-100.064l-51.082-95.167h39.189l33.587 62.277l33.587-62.278h38.486l-50.382 95.167l54.58 100.064h-38.486z"
			fill="currentColor"
		/>
	</svg>
);

export const TsxIcon = (props: IconProps) => (
	<svg
		height="200"
		width="200"
		viewBox="0 0 512 512"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<title>TSX Logo</title>
		<path
			d="M454.528.001H57.469C27.102-.228.403 23.534 0 57.471v397.058c.404 33.937 27.102 57.698 57.47 57.47h397.058c39.276-.56 56.791-30.223 57.472-57.47V57.471C511.32 30.224 493.805.56 454.528 0zM170.433 308.45h-48.83v155.887H82.417V308.45h-48.83v-39.185h136.845v39.185zm114.01 149.193c-31.375 13.921-87.05 8.847-106.163-33.191l31.487-18.193c15.744 29.913 56.577 29.842 64.593 10.14c7.829-19.236-15.787-26.758-45.095-39.755c-12.747-6.574-32.472-16.927-38.392-42.224c-4.467-19.09-.481-47.937 29.388-61.11l.004.002c41.429-15.204 73.237 4.198 82.567 26.59l-30.09 19.592c-4.448-8.028-13.928-16.237-24.873-16.824c-9.926-.533-19.154 4.657-19.448 18.08c.589 19.56 26.308 19.557 57.15 39.094c22.594 14.313 26.826 25.253 28.915 45.026c1.548 14.655-1.209 39.977-30.044 52.773zm152.738 6.693l-37.786-67.173l-37.785 67.174h-38.485l54.579-100.06l-51.08-95.164l.002-.001h39.184l33.586 62.275l33.587-62.275h38.485l-50.38 95.163l54.578 100.06H437.18z"
			fill="currentColor"
		/>
	</svg>
);
