import type { IconProps } from "@/utils/constants";

export default function ModeToggle() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="flex gap-4 border border-outline rounded-full h-[3.125rem] w-24 justify-center items-center relative bg-neutral-100 dark:bg-neutral-900/90">
        <Icons.sun className="w-8 h-8 text-yellow-500  transition-all duration-300 delay-300 group-data-[visible=true]/bento-card:rotate-[25deg] group-hover/bento-card:rotate-[25deg]" />
        <Icons.moon className="w-8 h-8 text-sky-600 transition-all duration-300 delay-100 group-data-[visible=true]/bento-card:rotate-[25deg] group-hover/bento-card:rotate-[25deg]" />
        <div className="absolute top-1 left-1 bg-neutral-300 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-950 min-h-10 min-w-10 rounded-full group-data-[visible=true]/bento-card:translate-x-[2.85rem] group-hover/bento-card:translate-x-[2.85rem] transition-all duration-500 delay-300" />
      </div>
      {/* <div className="h-12 w-12 border border-outline-secondary flex justify-center items-center bg-white dark:bg-neutral-300/80 group-hover/bento-card:bg-black rounded -z-20 transition-all duration-500 delay-300"></div> */}
    </div>
  );
}

const Icons = {
  sun: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 21 21" {...props}>
      <title>Sun</title>
      <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
          opacity=".3"
        />
        <g transform="translate(-210 -1)">
          <path d="M220.5 2.5v2m6.5.5l-1.5 1.5" />
          <circle cx="220.5" cy="11.5" r="4" />
          <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2" />
        </g>
      </g>
    </svg>
  ),
  moon: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56" {...props}>
      <title>Moon</title>
      <path
        fill="currentColor"
        d="M41.242 36.121c-12.937 0-20.953-7.781-20.953-20.273c0-3.563.61-6.703 1.477-8.391c.351-.68.398-1.008.398-1.476c0-.774-.703-1.688-1.687-1.688c-.188 0-.633.07-1.313.328c-8.648 3.516-14.742 12.656-14.742 22.5c0 14.227 10.313 24.586 24.539 24.586c10.219 0 18.469-5.344 22.29-14.11c.257-.609.327-1.124.327-1.382c0-.961-.843-1.617-1.547-1.617c-.398 0-.656.023-1.218.234c-1.922.773-4.782 1.29-7.57 1.29m-33.14-9.164c0-7.289 3.773-14.227 9.867-18.047c-.75 2.18-1.172 4.594-1.172 7.266c0 14.648 8.93 23.367 23.906 23.367c2.39 0 4.453-.281 6.375-.96c-3.562 5.882-10.43 9.468-17.953 9.468c-12.164 0-21.023-8.86-21.023-21.094"
      />
    </svg>
  ),
};
