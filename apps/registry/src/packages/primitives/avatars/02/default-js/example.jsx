import { IconProps } from "@registry/utils/types";
import { AvatarWithIcon } from "@registry/packages/primitives/avatars/02/default-js/Avatar";
import Dummy from "@registry/assets/Images/Image_2.jpg";

export default function AvatarImplementation() {
  return (
    <AvatarWithIcon
      icon={<NotionIcon className="size-2/3 text-primary" />}
      name="Profile Picture"
      src={Dummy}
      alt="Profile Picture"
    />
  );
}

export const NotionIcon = (props) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m76.25.25l13.059.086c.246.191.445.316.656.41c2.367 1.07 4.933 1.836 7.066 3.258c6.184 4.11 12.223 8.441 18.258 12.77c2.805 2.007 5.57 4.097 8.156 6.37c1.922 1.688 2.785 4.083 2.79 6.637l-.005 80.371c-.003 1.121-.195 2.274-.507 3.352c-1.418 4.914-4.563 8.277-9.512 9.59c-2.61.691-5.367.906-8.074 1.129c-4.223.351-8.461.523-12.692.777l-8.004.5l-12.816.754l-7.879.492l-12.941.75l-6.688.274c-.215.011-.414.312-.617.48c-5.09 0-10.176 0-15.309-.082c-.246-.195-.433-.352-.652-.414c-3.102-.899-5.703-2.613-7.703-5.102c-2.77-3.441-5.402-6.988-8.066-10.511c-3.274-4.329-6.633-8.594-9.727-13.047a15.47 15.47 0 0 1-2.79-8.875a72122.4 72122.4 0 0 1 .009-71.211c0-.684.12-1.375.238-2.055C3.742 9.645 9.152 5.746 15.586 5.023c3.34-.375 6.703-.543 10.059-.765l8.87-.512l3.813-.25l11.5-.992l6.375-.5l10.559-.75l8.87-.524c.216-.015.415-.312.618-.48M25.945 114.184c.532.691 1.125 1.347 1.59 2.082c2.254 3.527 5.485 4.808 9.59 4.535l27.809-1.656l31.296-1.891l15.582-1.004c4.618-.371 6.848-2.867 6.938-7.5v-1l.035-75.863c.004-2.285-.785-3.883-2.613-5.16l-22.024-15.52c-3.543-2.578-7.304-3.781-11.66-3.437L57.824 9.594l-25.789 1.902l-16.187 1.262c-3.27.3-5.297 2.3-5.883 5.508a13.868 13.868 0 0 0-.207 2.48l-.067 66.242c-.023 4.34 1.305 7.95 3.903 11.27l12.351 15.926zm0 0"
      fill="#fff"
    />
    <path d="m25.887 114.117l-12.293-15.86c-2.598-3.32-3.926-6.929-3.903-11.269l.067-66.242c0-.828.062-1.668.207-2.48c.586-3.207 2.613-5.207 5.883-5.508l16.187-1.262l25.79-1.902L82.488 7.77c4.356-.344 8.117.859 11.66 3.437c7.262 5.285 14.66 10.383 22.024 15.52c1.828 1.277 2.617 2.875 2.613 5.16l-.035 75.867v1c-.09 4.629-2.32 7.125-6.938 7.496c-5.187.418-10.386.688-15.582 1.004l-31.296 1.89l-27.809 1.657c-4.105.273-7.336-1.008-9.59-4.535c-.465-.735-1.058-1.391-1.648-2.149m6.406-45.992v33.488l.008 6.246c.054 2.801 1.426 4.196 4.226 4.356c.703.039 1.414.015 2.121-.028l23.442-1.382l44.765-2.559c2.79-.156 4.079-1.379 4.34-4.144c.051-.497.035-1 .035-1.5l.004-64.477c0-.375.012-.75-.011-1.125c-.168-2.566-1.27-3.613-3.82-3.477l-23.071 1.329a43791.29 43791.29 0 0 0-32.418 1.898l-16.207.973c-2.066.132-3 1.023-3.312 3.043a10.64 10.64 0 0 0-.098 1.617l-.004 25.742m57.172-52.727c-1.957-1.062-4.082-1.414-6.27-1.293c-3.363.184-6.726.461-10.09.704l-47.949 3.484c-1.449.105-2.906.21-4.336.469c-.48.086-1.086.57-1.234 1.008c-.11.308.375.93.73 1.27c.657.628 1.414 1.155 2.13 1.722c1.699 1.34 3.507 2.562 5.066 4.043c2.957 2.808 6.398 3.457 10.34 3.172l31.035-1.946l33.41-2.004c.305-.015.61-.109 1.281-.234c-.613-.637-.969-1.125-1.433-1.469a233.798 233.798 0 0 0-4.957-3.562a697.555 697.555 0 0 0-7.723-5.364zm0 0" />
    <path
      d="m32.293 68l.004-25.617c0-.54.016-1.086.098-1.617c.312-2.02 1.246-2.91 3.312-3.043l16.207-.973l32.418-1.898l23.07-1.329c2.551-.136 3.653.914 3.82 3.477c.024.375.012.75.012 1.125l-.004 64.477l-.035 1.5c-.261 2.765-1.55 3.988-4.34 4.144l-44.765 2.559l-23.442 1.382l-2.12.028c-2.801-.16-4.173-1.555-4.227-4.352l-.008-6.25V68m45.766.066L65.191 48.461c-.449-.684-.89-.91-1.718-.82l-5.485.37l-10.09.739c-2.48.227-3.98 2.559-3.293 4.977l5.344.457v43.293l-3.64 1.027c-1.614.476-2.305 1.836-1.762 3.574l12.308-.707l4.848-.398c2.09-.344 3.215-1.625 3.496-3.715l-6.73-1.535V63.16l.5.7l15.468 24.152a361.224 361.224 0 0 0 7.004 10.46c1.707 2.45 4.223 3.2 7.051 2.59c1.77-.378 3.469-1.097 5.203-1.656c.903-.293 1.211-.832 1.207-1.844l-.03-44.5c0-2.601 0-2.601 2.573-3.12c2.602-.524 3.254-1.563 2.66-4.344l-15.55.945c-1.692.121-2.973 1.535-3.23 3.18c-.126.793.038 1.23.987 1.285l4.708.52v30.179a7434.52 7434.52 0 0 0-8.961-13.637zM89.55 15.441a1122.8 1122.8 0 0 1 7.636 5.32a233.798 233.798 0 0 1 4.958 3.563c.464.344.82.832 1.433 1.469l-1.281.234l-33.41 2.004l-31.035 1.946c-3.942.285-7.383-.364-10.34-3.172c-1.559-1.48-3.367-2.703-5.067-4.043c-.715-.567-1.472-1.094-2.129-1.723c-.355-.34-.84-.96-.73-1.27c.148-.437.758-.921 1.234-1.007c1.43-.258 2.887-.364 4.336-.469l47.95-3.484l10.09-.704c2.187-.12 4.312.23 6.355 1.336zm0 0"
      fill="#fff"
    />
    <path d="m78.113 68.14l8.907 13.567v-30.18l-4.707-.52c-.95-.054-1.114-.491-.989-1.284c.258-1.645 1.54-3.059 3.23-3.18l15.551-.945c.594 2.78-.058 3.82-2.66 4.343c-2.574.516-2.574.516-2.574 3.121l.031 44.5c.004 1.012-.304 1.551-1.207 1.844l-5.203 1.656c-2.828.606-5.344-.14-7.05-2.59a366.671 366.671 0 0 1-7.004-10.46l-15.47-24.153c-.109-.172-.234-.332-.5-.699v32.563l6.731 1.535c-.281 2.09-1.406 3.37-3.496 3.715c-1.594.261-3.23.3-4.848.398l-12.308.707c-.543-1.738.148-3.098 1.762-3.574l3.64-1.027V54.184l-5.344-.457c-.687-2.418.813-4.75 3.293-4.977c3.356-.313 6.727-.504 10.09-.738c1.828-.125 3.664-.172 5.485-.371c.828-.09 1.27.136 1.718.82l12.922 19.68zm0 0" />
  </svg>
);
