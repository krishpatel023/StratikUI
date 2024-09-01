import type { SidebarProps } from "../Sidebar";

const sidebar: SidebarProps = [
  {
    type: "title",
    name: "primitives",
    flag: "default",
    children: [
      {
        type: "heading",
        name: "avatars",
        link: "docs/primitives/avatars",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Avatar",
            description:
              "A versatile Avatar component that displays an image or initials based on the provided name. It supports customization through additional styles and can indicate a disabled state.",
            tags: ["avatar", " component", " image"],
            link: "docs/primitives/avatars#default-avatar",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Avatar With Icon",
            description:
              "An extension of the Avatar component that adds an optional icon overlay. It retains all features of the Avatar while allowing an icon to be displayed in the corner.",
            tags: ["avatar", " icon", " component", " image"],
            link: "docs/primitives/avatars#avatar-with-icon",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Avatar Stack",
            description:
              "A component that displays a stack of Avatar components, with optional extension for additional avatars. The Avatar component is used internally to render individual avatars.",
            tags: ["avatar", " stack", " component", " ui"],
            link: "docs/primitives/avatars#avatar-stack",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "bento-grid",
        link: "docs/primitives/bento-grid",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Bento Grid",
            description:
              "A flexible grid layout component for arranging children in a responsive grid. Includes a BentoGridItem component for individual grid items with responsive span control.",
            tags: ["grid", " bento grid"],
            link: "docs/primitives/bento-grid#bento-grid",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "buttons",
        link: "docs/primitives/buttons",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Button",
            description:
              "A customizable button component with different styles based on the provided variant and processing state. Includes an internal Loader component for indicating loading state.",
            tags: ["button", " simple"],
            link: "docs/primitives/buttons#default-button",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Animated Button",
            description:
              "A button component with customizable styles and animations. Includes a CircularAnimation component for visual effects on click and an internal Loader for indicating loading state.",
            tags: ["button", " animation", " click animation"],
            link: "docs/primitives/buttons#animated-button",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "carousel",
        link: "docs/primitives/carousel",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Carousel",
            description:
              "This is an infinite Carousel developed using only tailwind. It has a direction attribute that controls the direction of the animation where the default is left. It also has a pauseOnHover attribute that pauses the animation when the user hovers over the carousel.",
            tags: [""],
            link: "docs/primitives/carousel#carousel",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "check-box",
        link: "docs/primitives/check-box",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Checkbox",
            description:
              "A customizable checkbox component with built-in styles and animations for selected and focused states.",
            tags: ["checkbox", " form"],
            link: "docs/primitives/check-box#default-checkbox",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "command-palette",
        link: "docs/primitives/command-palette",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Command Palette",
            description:
              "A suite of components to create a command palette UI, including triggers, items, and loading states.",
            tags: ["command palette", " ui", " component"],
            link: "docs/primitives/command-palette#command-palette",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "containers",
        link: "docs/primitives/containers",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Gradient Background",
            description:
              "A component that applies a gradient background to its children, with hover effects and customizable styles.",
            tags: ["background", " gradient"],
            link: "docs/primitives/containers#gradient-background",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Gradient Border",
            description:
              "A component that applies a gradient background with a customizable border size to its children. The gradient background has hover effects and can be styled with additional classes.",
            tags: ["background", " gradient", " ui"],
            link: "docs/primitives/containers#gradient-border",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Spotlight Container",
            description:
              "The component provides a sophisticated interactive effect that responds to mouse movements. When a user moves their cursor over the HighlightGroup, the HighlighterItem elements within it glow and animate dynamically, creating a visually engaging experience. This effect is ideal for drawing attention to specific areas of your application or website, enhancing user interaction through seamless integration and customizable styling. It is not suitable for `small screens`, thus it is recommended to have an alternative for the mobile version.",
            tags: ["highlight", " mouse effect", " container", " spotlight"],
            link: "docs/primitives/containers#spotlight-container",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Container with rotating border",
            description:
              "The Rotating Border Animation component adds a stylish, rotating border effect to your UI elements. This dynamic animation captures attention and enhances the visual appeal of buttons, sections, or any highlighted content.",
            tags: ["container", " gradient", " background", " conic gradient", " rotating"],
            link: "docs/primitives/containers#container-with-rotating-border",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Container With Conic Gradient Background",
            description:
              "A container component with a customizable conic gradient background and additional styling options. It features a flexible design with responsive gradients that adapt to light and dark themes.",
            tags: ["container", " gradient", " background"],
            link: "docs/primitives/containers#container-with-conic-gradient-background",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Glass / Blurred Background Container",
            description:
              "This effect adds a modern and sophisticated touch to your UI, blending background elements with a subtle blur for a clean and elegant look. Ideal for modals, overlays, or sections.",
            tags: [""],
            link: "docs/primitives/containers#glass-/-blurred-background-container",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Mouse Tracking Gradient Container",
            description:
              "A React component that displays a moving gradient effect based on the mouse position within the container.",
            tags: ["react", " container", " gradient", " mouse-tracking"],
            link: "docs/primitives/containers#mouse-tracking-gradient-container",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "drawer",
        link: "docs/primitives/drawer",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Drawer",
            description:
              "A sliding drawer component that can open from the left or right side of the screen. It includes a close button and automatically closes when clicking outside the drawer area.",
            tags: ["drawer", " sliding panel", " navigation"],
            link: "docs/primitives/drawer#default-drawer",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "dropdown",
        link: "docs/primitives/dropdown",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Dropdown",
            description:
              "This is a dropdown component is a versatile UI components that provides a list of selectable options within a compact and accessible interface.",
            tags: ["dropdown", " menu", " navigation"],
            link: "docs/primitives/dropdown#dropdown",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "file-upload-button",
        link: "docs/primitives/file-upload-button",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "File Upload Button",
            description:
              "A button component that triggers a file upload dialog and handles file selection. It supports custom styling and a callback function to handle selected files. This is a raw component without any styling.",
            tags: ["file upload", " button", " file input"],
            link: "docs/primitives/file-upload-button#file-upload-button",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Styled File Upload Button",
            description:
              "A styled button component that triggers a file upload dialog and handles file selection. It supports custom styling and a callback function to handle selected files. This is a raw component without any styling.",
            tags: ["file upload", " button", " file input"],
            link: "docs/primitives/file-upload-button#styled-file-upload-button",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "file-upload-dropbox",
        link: "docs/primitives/file-upload-dropbox",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "File Dropbox",
            description:
              "A dropbox component for uploading files by dragging and dropping, with validation for file size, type, and number of files.",
            tags: ["dropbox", " file upload", " drag and drop"],
            link: "docs/primitives/file-upload-dropbox#file-dropbox",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "header-blocks",
        link: "docs/primitives/header-blocks",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Header Block",
            description:
              "A set of components for building a navigational header with items and dropdown functionality.",
            tags: ["header", " navigation", " dropdown"],
            link: "docs/primitives/header-blocks#default-header-block",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Continuous Header Blocks",
            description:
              "A set of components for building a navigational header with items and dropdown functionality. This header blocks is continuous which means that the user can scroll from one item to another and the dropdowns will just translate its position rather than closing and reopening.",
            tags: ["header", " navigation", " dropdown"],
            link: "docs/primitives/header-blocks#continuous-header-blocks",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Continuous Header Blocks with Animation",
            description:
              "A set of components for building a navigational header with items and dropdown functionality, including animations. This is similar to the header blocks of above but with animations.",
            tags: ["header", " navigation", " dropdown", " animation"],
            link: "docs/primitives/header-blocks#continuous-header-blocks-with-animation",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "input-number",
        link: "docs/primitives/input-number",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Input Number",
            description:
              "A number field allows a user to enter a number, and increment or decrement the value using stepper buttons. There are various formats for the number, such as currency, percentage, or decimal.",
            tags: ["input", " number", " form", " button"],
            link: "docs/primitives/input-number#default-input-number",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Input Number",
            description:
              "A number field allows a user to enter a number, and increment or decrement the value using stepper buttons. There are various formats for the number, such as currency, percentage, or decimal.",
            tags: ["input", " number", " form", " button"],
            link: "docs/primitives/input-number#input-number",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "input-otp",
        link: "docs/primitives/input-otp",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "OTP Input",
            description:
              "A component for handling OTP input with support for partitions, auto-focus, and input validation. It has a customizable and user-friendly input field for entering one-time passwords (OTP) in a React application.",
            tags: ["otp", " input", " partition", " focus"],
            link: "docs/primitives/input-otp#otp-input",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "input-text",
        link: "docs/primitives/input-text",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Input",
            description:
              "This is a default text input built using react-aria and is styled using tailwind css and twMerge. It is accessible by default.",
            tags: ["input", " field", " label", " aria"],
            link: "docs/primitives/input-text#default-input",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Default Input with States",
            description:
              "This is a default input field with various states that can be used to display error messages, disabled fields, and invalid fields. This makes the usage of the input field more flexible and easier to manage.",
            tags: ["input", " field", " label", " error"],
            link: "docs/primitives/input-text#default-input-with-states",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Input with Icon on the Left",
            description:
              "The Input Component with Icon on the left seamlessly combines a text input field with an adjacent icon, enhancing user interaction by providing visual cues and streamlined functionality",
            tags: ["input", " field", " label", " error", " icon"],
            link: "docs/primitives/input-text#input-with-icon-on-the-left",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Input with Icon on the Right",
            description:
              "The Input Component with Icon on the Right seamlessly combines a text input field with an adjacent icon, enhancing user interaction by providing visual cues and streamlined functionality",
            tags: ["input", " field", " label", " error", " aria", " icon"],
            link: "docs/primitives/input-text#input-with-icon-on-the-right",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Floating Label Animation in Input Fields",
            description:
              "A floating label input component enhances form usability by animating the label to float above the input field when the field gains focus or contains text. The animation provides a smooth, modern interaction experience for users.",
            tags: ["input", " field", " label", " error", " floating", " placeholder"],
            link: "docs/primitives/input-text#floating-label-animation-in-input-fields",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Input with Password Toggle",
            description:
              "A toggle password input enhances usability by allowing users to reveal or conceal entered password characters with a simple interaction, such as clicking an icon. This feature improves user experience by providing flexibility to verify password accuracy before submission, while maintaining security by obscuring the password by default.",
            tags: ["input", " field", " label", " error", " password", " toggle"],
            link: "docs/primitives/input-text#input-with-password-toggle",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Default Lined Input",
            description:
              "An input field with just a bottom line simplifies the appearance by removing side and top borders. It looks clean and modern, focusing on clarity and ease of use while fitting well with minimalist design styles.",
            tags: ["input", " field", " label", " lined"],
            link: "docs/primitives/input-text#default-lined-input",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Lined Input with States",
            description:
              "An input field with just a bottom line simplifies the appearance by removing side and top borders. It looks clean and modern, focusing on clarity and ease of use while fitting well with minimalist design styles.",
            tags: ["input field", " label", " lined"],
            link: "docs/primitives/input-text#lined-input-with-states",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Default Input with Label Inside",
            description:
              "This input component features a label positioned inside the input field itself. By placing the label within the input, it saves space in the UI and provides immediate context for the user. This design pattern can create a clean, modern look while maintaining clarity on the input's purpose.",
            tags: ["input", " field", " label", " embedded"],
            link: "docs/primitives/input-text#default-input-with-label-inside",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Input with Label Inside and States",
            description:
              "This input component features a label positioned inside the input field itself. By placing the label within the input, it saves space in the UI and provides immediate context for the user. This design pattern can create a clean, modern look while maintaining clarity on the input's purpose.",
            tags: ["input", " field", " label", " embedded", " inside"],
            link: "docs/primitives/input-text#input-with-label-inside-and-states",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "key-listener",
        link: "docs/primitives/key-listener",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Key Listener",
            description:
              "A set of components for handling keyboard shortcuts with custom key combinations and visual display support.",
            tags: ["keyboard", " key listener", " shortcuts", " events"],
            link: "docs/primitives/key-listener#key-listener",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "meter",
        link: "docs/primitives/meter",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Meter",
            description:
              "A meter represents a quantity within a known range, or a fractional value. Meters are often used to represent a percentage or a ratio.",
            tags: ["Meter", " Progress", " React"],
            link: "docs/primitives/meter#meter",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "modals",
        link: "docs/primitives/modals",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Modal",
            description:
              "A modal is highly customizable and includes features like entry and exit animations, customizable underlay and overlay elements, various closing methods, etc.",
            tags: ["Modal", " Dialog", " Overlay", " React"],
            link: "docs/primitives/modals#modal",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "pagination",
        link: "docs/primitives/pagination",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Pagination with only Next and Previous Buttons",
            description:
              "This is a simple pagination component with only next and previous buttons. It has a default implementation of the buttons and a prop to pass the event handlers. It has no way to jump to a specific page, hence it is a simple pagination component.",
            tags: ["Pagination", " Navigation", " pages"],
            link: "docs/primitives/pagination#pagination-with-only-next-and-previous-buttons",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Pagination with Page Buttons",
            description:
              "The Pagination component features buttons for incrementing and decrementing pages, as well as direct access to specific page numbers, making it user-friendly and efficient. Additionally, it includes optional event handlers for custom behavior when pages change, enhancing its flexibility for various use cases.",
            tags: ["Pagination", " Navigation", " pages"],
            link: "docs/primitives/pagination#pagination-with-page-buttons",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "popover",
        link: "docs/primitives/popover",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Popover",
            description: "A popover component that provides a dialog-like overlay for displaying additional content.",
            tags: ["Popover", " Dialog", " React"],
            link: "docs/primitives/popover#popover",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "progress-bar",
        link: "docs/primitives/progress-bar",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Progress Bar",
            description: "A progress bar visually represents the progress of a task or operation.",
            tags: ["ProgressBar", " React", " Component"],
            link: "docs/primitives/progress-bar#progress-bar",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "resizable-containers",
        link: "docs/primitives/resizable-containers",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Resizable Container",
            description:
              "A resizable container component that allows dynamic resizing in specified directions, with customizable minimum dimensions. It uses the `useResizable` hook from the library to perform the resizing. This primitive includes helper functions like Container, Handle, etc to make the entire process easy. It also has callback functions that can be used to show different messages to the user based on the current state of the hook.",
            tags: ["Resizable Container", " ResizeBoundingElement", " React", " Component"],
            link: "docs/primitives/resizable-containers#resizable-container",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Resizable Partition in a Container",
            description:
              "This way you can use Resizable component as a resizable partition. This is just an example of the use cases for this hook. It uses the `useResizable` hook from the library to perform the resizing. This primitive includes helper functions like Container, Handle, etc to make the entire process easy. It also has callback functions that can be used to show different messages to the user based on the current state of the hook.",
            tags: ["Resizable Container", " ResizeBoundingElement", " React", " Component"],
            link: "docs/primitives/resizable-containers#resizable-partition-in-a-container",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "scroll-to-top",
        link: "docs/primitives/scroll-to-top",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Scroll To Top",
            description:
              "A button component that becomes visible when scrolling down a page, allowing users to quickly scroll back to the top. This will automatically detect if the user has scrolled past the specified threshold and will scroll to the top of the page enabling clean code implementation.",
            tags: ["ScrollToTop", " Button", " React", " Component"],
            link: "docs/primitives/scroll-to-top#scroll-to-top",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "select",
        link: "docs/primitives/select",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Select",
            description: "A select displays a collapsible list of options and allows a user to select one of them.",
            tags: ["Select", " Dropdown"],
            link: "docs/primitives/select#select",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "select-autocomplete",
        link: "docs/primitives/select-autocomplete",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Autocomplete",
            description:
              "A customizable autocomplete component which combines a text input with a listbox, allowing users to filter a list of options to items matching a query.",
            tags: ["Autocomplete", " Input"],
            link: "docs/primitives/select-autocomplete#autocomplete",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "steppers",
        link: "docs/primitives/steppers",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Stepper",
            description:
              "This is a Stepper component that displays a series of steps. It handles the state change and navigation between steps internally and can be controlled by the user. It is designed in such a way that it can used in many different contexts. It is responsive and has a data-state attribute that can be used to show the current state of the step.",
            tags: ["Stepper", " Steps", " Navigation", " Progress"],
            link: "docs/primitives/steppers#default-stepper",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Indicating Stepper",
            description:
              "This stepper component is more like a stepper in form of a progress bar. It is used to indicate the current step of a process. It is responsive and has a data-state attribute that can be used to show the current state of the step. It will improve the user experience of the process as it will show the user which step they are on.",
            tags: ["Stepper", " Steps", " Navigation", " Progress", " Indicator"],
            link: "docs/primitives/steppers#indicating-stepper",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Vertical Stepper",
            description:
              "This is a vertical stepper component that displays a series of steps. It handles the state change and navigation between steps internally and can be controlled by the user. It is designed in such a way that it can used in many different contexts. It is responsive and has a data-state attribute that can be used to show the current state of the step.",
            tags: ["Stepper", " Steps", " Navigation", " Progress"],
            link: "docs/primitives/steppers#vertical-stepper",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Boxed Stepper",
            description:
              "This stepper component has the same features as above but with a different design. It is used to indicate the current step of a process. It is responsive and has a data-state attribute that can be used to show the current state of the step. It will improve the user experience of the process as it will show the user which step they are on.",
            tags: ["Stepper", " Steps", " Navigation", " Progress"],
            link: "docs/primitives/steppers#boxed-stepper",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Stepper with Progress bar",
            description:
              "This component provides a simple implementation of a stepper with a progress meter and navigation buttons to move between steps. It is designed to guide users through a series of steps. It uses a Progress Bar to visually represent progress.",
            tags: ["Stepper", " Progress", " Navigation"],
            link: "docs/primitives/steppers#stepper-with-progress-bar",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Detailed Stepper",
            description:
              "This is a combination of the stepper and meter components. It is an example to show how to integrate both together to create a more complex but user-friendly UI.",
            tags: ["Stepper", " Progress", " Navigation", " Steps"],
            link: "docs/primitives/steppers#detailed-stepper",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "switch",
        link: "docs/primitives/switch",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Switch",
            description: "A customizable switch component with various style variants for toggling between states.",
            tags: ["Switch", " Toggle"],
            link: "docs/primitives/switch#switch",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "text",
        link: "docs/primitives/text",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Gradient Text",
            description:
              "This is just a demo of how to implement a gradient text. You can use it in your project in multiple ways.",
            tags: ["text", " gradient"],
            link: "docs/primitives/text#gradient-text",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "theme-toggles",
        link: "docs/primitives/theme-toggles",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Theme Toggle Group",
            description:
              "The `ThemeToggle` component allows users to switch between different theme modes and reflects the current theme with active state indicators.",
            tags: ["Toggle", " Group"],
            link: "docs/primitives/theme-toggles#theme-toggle-group",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "tooltip",
        link: "docs/primitives/tooltip",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Tooltip",
            description:
              "The tooltip component enhances user interaction by providing contextual information when hovering over or focusing on an element.",
            tags: ["Tooltip"],
            link: "docs/primitives/tooltip#tooltip",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
    ],
  },
  {
    type: "title",
    name: "components",
    flag: "default",
    children: [
      {
        type: "heading",
        name: "authentication",
        link: "docs/components/authentication",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Basic Sign In",
            description:
              "This is a basic sign in component built yet it's functional. The purpose of it is to provide you basic UI that you can modify to fit your needs.",
            tags: ["authentication", " sign in"],
            link: "docs/components/authentication#basic-sign-in",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Basic Sign Up",
            description:
              "This is a basic sign up component built yet it's functional. The purpose of it is to provide you basic UI that you can modify to fit your needs.",
            tags: ["authentication", " sign up"],
            link: "docs/components/authentication#basic-sign-up",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Basic Sign Up expanded version",
            description:
              "This is a basic sign up component built yet it's functional. The purpose of it is to provide you basic UI that you can modify to fit your needs.",
            tags: ["authentication", " sign up"],
            link: "docs/components/authentication#basic-sign-up-expanded-version",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Flexed SignIn",
            description:
              "The sign-in component features a sleek, responsive design with a balanced flex layout. On one side, a welcoming message greets users, setting a friendly and engaging tone for the sign-in process. On the opposite side, the sign-in form is presented in a clean, intuitive manner.",
            tags: ["authentication", " sign in", " flexed", " modern"],
            link: "docs/components/authentication#flexed-signin",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Flexed SignUp",
            description:
              "The sign-up component features a sleek, responsive design with a balanced flex layout. On one side, a welcoming message greets users, setting a friendly and engaging tone for the sign-in process. On the opposite side, the sign-in form is presented in a clean, intuitive manner.",
            tags: ["authentication", " sign up", " flexed", " modern"],
            link: "docs/components/authentication#flexed-signup",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Blurred SignUp with Background",
            description:
              "The sign-up component features a sleek, responsive design with a balanced layout. The blur effect is applied to the background to create a visually appealing and engaging experience.",
            tags: ["authentication", " sign up", " blurred", " background", " modern"],
            link: "docs/components/authentication#blurred-signup-with-background",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Blurred SignUp with Background",
            description:
              "The sign-up component features a sleek, responsive design with a balanced layout. The blur effect is applied to the background to create a visually appealing and engaging experience.",
            tags: ["authentication", " sign up", " blurred", " background", " modern"],
            link: "docs/components/authentication#blurred-signup-with-background",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Blurred SignUp with Background expanded version",
            description:
              "The sign-up component features a sleek, responsive design with a balanced layout. The blur effect is applied to the background to create a visually appealing and engaging experience.",
            tags: ["authentication", " sign up", " blurred", " background", " modern"],
            link: "docs/components/authentication#blurred-signup-with-background-expanded-version",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Blurred SignIn with Different Button Layout",
            description:
              "The sign-in component features a sleek, responsive design with a balanced layout. The blur effect is applied to the background to create a visually appealing and engaging experience.",
            tags: ["authentication", " sign in", " blurred", " background", " modern"],
            link: "docs/components/authentication#blurred-signin-with-different-button-layout",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Blurred SignUp with Different Button Layout",
            description:
              "The sign-up component features a sleek, responsive design with a balanced layout. The blur effect is applied to the background to create a visually appealing and engaging experience.",
            tags: ["authentication", " sign up", " blurred", " background", " modern"],
            link: "docs/components/authentication#blurred-signup-with-different-button-layout",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Blurred SignUp with Different Button Layout expanded version",
            description:
              "The sign-up component features a sleek, responsive design with a balanced layout. The blur effect is applied to the background to create a visually appealing and engaging experience.",
            tags: ["authentication", " sign up", " blurred", " background", " modern"],
            link: "docs/components/authentication#blurred-signup-with-different-button-layout-expanded-version",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "banners",
        link: "docs/components/banners",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Banner",
            description:
              "This is a default banner component which has three variants - default, sticky and fixed. You can use this component to display a banner on the top of the page.",
            tags: ["Banner"],
            link: "docs/components/banners#default-banner",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "brand-association",
        link: "docs/components/brand-association",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Brand Wall",
            description:
              "This is a brand wall that can be used for marketing by showing partners, clients or apps that are using your product. By displaying recognizable logos and names, it builds credibility and trust with potential customers.",
            tags: ["Brand Association", " Branding", " Brand Wall", " Marketing"],
            link: "docs/components/brand-association#brand-wall",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "cards",
        link: "docs/components/cards",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Card",
            description: "This card can be used as product card or to display any other information.",
            tags: ["Cards", " Product", " Default"],
            link: "docs/components/cards#default-card",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Simple Card with Button",
            description:
              "This is a simple card with button that can be used as product card or to display any other information.",
            tags: ["Cards", " Product", " Simple", " Button"],
            link: "docs/components/cards#simple-card-with-button",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Simple Card with Link",
            description:
              "This is a simple card with link that can be used as product card or to display any other information.",
            tags: ["Cards", " Product", " Simple", " Link"],
            link: "docs/components/cards#simple-card-with-link",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Simple Card with Top Section",
            description:
              "This is a simple card with top section that can be used as product card or to display any other information.",
            tags: ["Cards", " Product", " Simple"],
            link: "docs/components/cards#simple-card-with-top-section",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Simple Card with Bottom Section",
            description:
              "This is a simple card with bottom section that can be used as product card or to display any other information.",
            tags: ["Cards", " Product", " Simple"],
            link: "docs/components/cards#simple-card-with-bottom-section",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Banner Card",
            description: "This is a banner card that can be used as product card or to display any other information.",
            tags: ["Cards", " Product"],
            link: "docs/components/cards#banner-card",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Card with spotlight gradient",
            description:
              "Any card can be used with this spotlight gradient animation. This card can be used as product card or to display any other information.",
            tags: ["Cards", " Product", " Spotlight"],
            link: "docs/components/cards#card-with-spotlight-gradient",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Contact Card",
            description: "This is a contact card that can be used as workforce introduction.",
            tags: ["Cards", " Product", " Contact"],
            link: "docs/components/cards#contact-card",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "cookie-consent",
        link: "docs/components/cookie-consent",
        version_included: "0.1.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Cookie Consent",
            description:
              "This component is paired up with useCookies hook. It uses the useCookies hook to be familiar with the categories of the cookie the user has accepted. This component is a cookie consent prompt and with the `useCookies` hook, you can add the cookies according to the category that the user has accepted. If the user has not accepted that cookie category, it won't be used.",
            tags: ["Cookies", " Cookie Category", " useCookies"],
            link: "docs/components/cookie-consent#default-cookie-consent",
            version_included: "0.1.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Centered Cookie Consent",
            description:
              "This component is paired up with useCookies hook. It uses the useCookies hook to be familiar with the categories of the cookie the user has accepted. This component is a cookie consent prompt and with the `useCookies` hook, you can add the cookies according to the category that the user has accepted. If the user has not accepted that cookie category, it won't be used.",
            tags: ["Cookies", " Cookie Category", " useCookies"],
            link: "docs/components/cookie-consent#centered-cookie-consent",
            version_included: "0.1.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Variant of Centered Cookie Consent",
            description:
              "This component is paired up with useCookies hook. It uses the useCookies hook to be familiar with the categories of the cookie the user has accepted. This component is a cookie consent prompt and with the `useCookies` hook, you can add the cookies according to the category that the user has accepted. If the user has not accepted that cookie category, it won't be used.",
            tags: ["Cookies", " Cookie Category", " useCookies"],
            link: "docs/components/cookie-consent#variant-of-centered-cookie-consent",
            version_included: "0.1.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "file-upload",
        link: "docs/components/file-upload",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default File Upload",
            description:
              "This is a default file upload component that can be used to upload files. It supports drag and drop, file selection, file type validation, and file size limit. It uses `Dropbox` and `File Upload Button` primitives to implement the file upload functionality.",
            tags: [""],
            link: "docs/components/file-upload#default-file-upload",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "File Upload Component with Loader Animations",
            description:
              "This is a file upload component with loader animation that can be used to upload files. It supports drag and drop, file selection, file type validation, and file size limit. It uses `Dropbox` and `File Upload Button` primitives to implement the file upload functionality.",
            tags: [""],
            link: "docs/components/file-upload#file-upload-component-with-loader-animations",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Detailed File Upload Component",
            description:
              "This is a detailed file upload component that can be used to upload files. It supports drag and drop, file selection, file type validation, and file size limit. It uses `Dropbox` and `File Upload Button` primitives to implement the file upload functionality.",
            tags: [""],
            link: "docs/components/file-upload#detailed-file-upload-component",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "footer",
        link: "docs/components/footer",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Basic Footer",
            description:
              "This is the basic footer component that features a clean and straightforward design, making it easy for users to find the information they need without any distractions.",
            tags: ["Footer"],
            link: "docs/components/footer#basic-footer",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Footer with theme toggles",
            description:
              "This footer component features a clean and straightforward design, making it easy for users to find the information they need without any distractions. It also includes theme toggles to switch between modes.",
            tags: ["Footer", " Theme Toggles"],
            link: "docs/components/footer#footer-with-theme-toggles",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Detailed Footer",
            description:
              "This is a detailed footer component which features a clean and straightforward design, making it easy for users to find the information they need without any distractions. It also includes theme toggles to switch between modes.",
            tags: ["Footer", " Theme Toggles"],
            link: "docs/components/footer#detailed-footer",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "headers",
        link: "docs/components/headers",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Default Header",
            description:
              "A simple header with link dropdowns and header drawers. It is fully responsive and can be used in any layout.",
            tags: ["header", " header-drawer", " header-dropdown", " responsive"],
            link: "docs/components/headers#default-header",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Header with animated dropdowns",
            description:
              "A header built with dropdowns that is fully responsive and animated. It has a nice hover effect and can be used in any layout.",
            tags: ["header", " header-dropdown", " header-drawer", " responsive", " animation"],
            link: "docs/components/headers#header-with-animated-dropdowns",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Hanging Header with blurred background",
            description:
              "A header with a blurred background that is fixed to the top of the page. It has a nice hover effect and can be used in any layout.",
            tags: ["header", " header-drawer", " header-dropdown"],
            link: "docs/components/headers#hanging-header-with-blurred-background",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Header with animation on scroll",
            description:
              'This is a header component featuring animations that respond to scrolling. As you scroll down the page, the header smoothly transitions into a "hanging" position. While in this state, additional animations are triggered by further scrolling. When you scroll back up, the header animates back into view.',
            tags: ["Animation", " Header", " Scroll"],
            link: "docs/components/headers#header-with-animation-on-scroll",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Header with search bar and animations",
            description:
              "This header component combines functionality and style with its integrated search bar and elegantly animated dropdown menus. Users can quickly access the search bar and navigate dropdown menus using convenient keyboard shortcuts. The smooth animations of the dropdowns enhance the user experience, offering fluid transitions that add a touch of sophistication to the navigation.",
            tags: ["Animation", " Header", " Search"],
            link: "docs/components/headers#header-with-search-bar-and-animations",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "hero-section",
        link: "docs/components/hero-section",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Simple Hero Section",
            description:
              "This is a simple hero section that is elegant and simple for any purpose. It has a mouse hover effect and a subtle animation in the call to action button.",
            tags: ["hero section", " call to action"],
            link: "docs/components/hero-section#simple-hero-section",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Hero Section with Grid of Images",
            description:
              "This is a hero section with a grid of images that can be used to showcase a product or service.",
            tags: ["hero section", " grid", " images"],
            link: "docs/components/hero-section#hero-section-with-grid-of-images",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Hero Section with Carousel",
            description:
              "This hero section can be used for websites that require images to display their credebility. It can also be used for landing pages. This component also comes with a carousel component that has a left and right direction movement that you add to it.",
            tags: ["hero section", " carousel", " images"],
            link: "docs/components/hero-section#hero-section-with-carousel",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Hero Section with Brand Association",
            description:
              "This hero section can be used for websites that require images to display their credibility. It can also be used for landing pages. It contains various logos that are associated with the brand.",
            tags: ["hero section", " brand association"],
            link: "docs/components/hero-section#hero-section-with-brand-association",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Hero Section with Brand Association with Minor Changes",
            description:
              "This hero section can be used for websites that require images to display their credibility. It can also be used for landing pages. It contains various logos that are associated with the brand.",
            tags: ["hero section", " brand association"],
            link: "docs/components/hero-section#hero-section-with-brand-association-with-minor-changes",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "pricing",
        link: "docs/components/pricing",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Pricing Group with Spotlight Animations",
            description:
              "The pricing group component features an engaging background with a dynamic circular gradient that seamlessly follows the mouse cursor, creating an interactive and visually appealing experience. As users move their cursor across the component, the gradient shifts and transforms, accompanied by a sleek border animation that enhances the sense of motion and responsiveness.",
            tags: ["Pricing", " Group", " Spotlight", " Animation"],
            link: "docs/components/pricing#pricing-group-with-spotlight-animations",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Simple Pricing Component",
            description:
              "The simple pricing component features a clean and straightforward design, making it easy for users to find the information they need without any distractions.",
            tags: ["Pricing", " Simple"],
            link: "docs/components/pricing#simple-pricing-component",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Pricing with Accent Differentiator for Most Popular Plan",
            description:
              "The simple pricing component features a clean and straightforward design, making it easy for users to find the information they need without any distractions.",
            tags: ["Pricing", " Simple"],
            link: "docs/components/pricing#pricing-with-accent-differentiator-for-most-popular-plan",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Pricing with Highlighted Plan",
            description:
              "The simple pricing component features a clean and straightforward design, making it easy for users to find the information they need without any distractions. It has a highlighted plan that is easy to spot and distinguish from the other plans.",
            tags: ["Pricing", " Simple"],
            link: "docs/components/pricing#pricing-with-highlighted-plan",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Pricing with more rounded design",
            description:
              "The simple pricing component features a clean and straightforward design, making it easy for users to find the information they need without any distractions. It has a highlighted plan that is easy to spot.",
            tags: ["Pricing", " Simple"],
            link: "docs/components/pricing#pricing-with-more-rounded-design",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Detailed Pricing Component",
            description:
              "The Detailed Pricing Component provides an in-depth look at product offerings, featuring multiple sections that clearly outline the features, benefits, and pricing tiers. Each section is designed to present essential information in an organized manner, helping users easily compare different plans.",
            tags: ["Pricing", " Detailed"],
            link: "docs/components/pricing#detailed-pricing-component",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Detailed Pricing Component with highlighted Most Popular",
            description:
              "The Detailed Pricing Component provides an in-depth look at product offerings, featuring multiple sections that clearly outline the features, benefits, and pricing tiers. Each section is designed to present essential information in an organized manner, helping users easily compare different plans.",
            tags: ["Pricing", " Detailed"],
            link: "docs/components/pricing#detailed-pricing-component-with-highlighted-most-popular",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "testimonials",
        link: "docs/components/testimonials",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "Testimonial Section with Cards",
            description:
              "This is a Testimonial Section with Cards that are arranged in an organized grid which can be used wisely to highlight the key points of your product or service.",
            tags: ["Testimonials", " Cards", " Organized", " Grid"],
            link: "docs/components/testimonials#testimonial-section-with-cards",
            version_included: "0.2.0",
            flag: "default",
          },
          {
            type: "sub-heading",
            name: "Grid Testimonial Cards",
            description:
              "A grid of cards with testimonials where you can display your most important feedback at the center and rest around it. It's glassy background looks great with abstract backgrounds.",
            tags: ["Testimonials", " Cards", " Grid"],
            link: "docs/components/testimonials#grid-testimonial-cards",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
    ],
  },
  {
    type: "title",
    name: "hooks",
    flag: "default",
    children: [
      {
        type: "heading",
        name: "useArtificialLoader",
        link: "docs/hooks/useArtificialLoader",
        version_included: "0.3.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useArtificialLoader",
            description:
              "This hooks increases the value from 0 to 100 randomly in a given time. This helps us to give the loading effects and the increase is random thus making it more realistic. You can use it in various website loaders as well as loading page elements like top loading bars.",
            tags: ["hooks", " artificial", " loader"],
            link: "docs/hooks/useArtificialLoader#useartificialloader",
            version_included: "0.3.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useClickOutside",
        link: "docs/hooks/useClickOutside",
        version_included: "0.3.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useClickOutside",
            description:
              "The useClickOutside hook detects clicks outside a specified element and triggers a callback function. It accepts two parameters - a reference to the target element and a callback function to execute when a click outside the element is detected. This hook is useful for handling interactions like closing dropdowns or modals when a user clicks outside of them.",
            tags: ["useClickOutside", " hooks", " click", " outside"],
            link: "docs/hooks/useClickOutside#useclickoutside",
            version_included: "0.3.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useClipboard",
        link: "docs/hooks/useClipboard",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useClipboard",
            description: "The useClipboard hook makes it easy to use clipboard with its two functions - copy and read.",
            tags: ["copy", " clipboard", " read", " useClipboard", " hooks"],
            link: "docs/hooks/useClipboard#useclipboard",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useCookies",
        link: "docs/hooks/useCookies",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useCookies",
            description:
              "The useCookies hook a way to manage cookie preferences and operations in a React application. It allows you to toggle, reset, accept, or reject cookie categories, as well as set, edit, remove, and retrieve cookies with ease. This hook leverages localStorage to persist cookie preferences across sessions, ensuring a consistent user experience.",
            tags: ["hooks", " cookies", " use-cookies"],
            link: "docs/hooks/useCookies#usecookies",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useDelay",
        link: "docs/hooks/useDelay",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useDelay",
            description:
              "The useDelay hook introduces a delay before executing a specified action, utilizing useTimeout and Promise for managing the delay.  This hook supports both synchronous and asynchronous functions, making it versatile for various use cases where deferred actions are needed, such as enhancing user experience or managing timed events.",
            tags: ["useDelay", " hooks", " delay", " timeout", " setTimeout", " clearTimeout"],
            link: "docs/hooks/useDelay#usedelay",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useDisableScroll",
        link: "docs/hooks/useDisableScroll",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useDisableScroll",
            description:
              "The useDisableScroll hook is used to disable scrolling on a web page or a specific element. This hook is particularly useful in scenarios where you want to prevent the user from scrolling, such as when a modal or a full-screen menu is open.",
            tags: ["hooks", " useDisableScroll", " scrollbar", " disable"],
            link: "docs/hooks/useDisableScroll#usedisablescroll",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useFullscreen",
        link: "docs/hooks/useFullscreen",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useFullscreen",
            description:
              "The `useFullscreen` hook provides functionality for managing fullscreen mode in web applications. It allows you to request fullscreen mode for a specific element and exit fullscreen mode when needed. The hook also tracks whether the document is currently in fullscreen mode.",
            tags: ["hooks", " full screen", " fullscreen"],
            link: "docs/hooks/useFullscreen#usefullscreen",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useHash",
        link: "docs/hooks/useHash",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useHash",
            description:
              "useHash is a custom React hook that simplifies working with URL hash values in Next.js applications. It allows you to easily retrieve and update the hash value, while ensuring proper hydration and avoiding mismatches between server-rendered and client-rendered HTML. The hook provides a seamless way to handle hash changes and keep your component in sync with the URL hash value.",
            tags: ["hooks", " useHash", " hash key", " url"],
            link: "docs/hooks/useHash#usehash",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useMousePosition",
        link: "docs/hooks/useMousePosition",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useMousePosition",
            description:
              "The `useMousePosition` hook provides real-time tracking of the mouse position, either globally or relative to a specific HTML element. This is useful for applications needing precise cursor positioning, such as custom drag-and-drop interfaces, canvas drawing, or interactive visualizations.",
            tags: ["hooks", " mouse", " position", " useMousePosition"],
            link: "docs/hooks/useMousePosition#usemouseposition",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useOS",
        link: "docs/hooks/useOS",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useOS",
            description:
              "The `useOS` hook provides a simple way to detect the user's operating system based on the browser's user agent string. This can be useful for adjusting functionality or UI elements based on the detected OS.",
            tags: ["hooks", " useOS", " Operating System", " Browser"],
            link: "docs/hooks/useOS#useos",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useProcess",
        link: "docs/hooks/useProcess",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useProcess",
            description:
              "The `useProcess` hook provides a convenient way to manage the execution of asynchronous processes, with built-in state management to track whether a process is currently running. This is particularly useful for handling loading states in user interfaces during async and not async operations.",
            tags: ["hooks", " process", " useProcess"],
            link: "docs/hooks/useProcess#useprocess",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useResizable",
        link: "docs/hooks/useResizable",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useResizable",
            description:
              "This hook is used to handle the resizing of an element. It can be used in multiple ways, such as pairing it with our helper functions to make the entire implementation easy or else can be used as a standalone hook. It also has callback functions that can be used to show different messages to the user based on the current state of the hook.",
            tags: ["useResizable", " component resize", " drag", " hooks"],
            link: "docs/hooks/useResizable#useresizable",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useScrollbar",
        link: "docs/hooks/useScrollbar",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useScrollbar",
            description:
              "The `useScrollbar` hook provides an easy way to track the scroll position and direction of either the window or a specific element on the page. It can be useful for triggering animations or loading content based on scroll behavior.",
            tags: ["hooks", " useScrollbar", " scrollbar", " scroll"],
            link: "docs/hooks/useScrollbar#usescrollbar",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
      {
        type: "heading",
        name: "useScrollTo",
        link: "docs/hooks/useScrollTo",
        version_included: "0.2.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useScrollTo",
            description:
              'The `useScrollTo` hook allows you to scroll smoothly to a specific element or to the top of the page and manages the visibility of elements based on scroll position. This is useful for implementing features like "Back to Top" buttons or revealing elements when the user scrolls down the page.',
            tags: ["hooks", " scroll", " scrollTo", " useScrollTo"],
            link: "docs/hooks/useScrollTo#usescrollto",
            version_included: "0.2.0",
            flag: "default",
          },
        ],
      },
    ],
  },
];
export default sidebar;
