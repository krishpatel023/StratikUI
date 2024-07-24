import ArrowHeading from "@/ui/ArrowHeading";
import { Avatar } from "@/packages/primitives/avatars/01/default-js/Avatar";
import Dummy from "@/assets/Images/Image_2.jpg";

export default function AvatarImplementation() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* With Image */}
      <ArrowHeading text="With Image" />
      <Avatar src={Dummy} alt="Profile Picture" name="Profile Picture" />
      {/* Without Image */}
      <ArrowHeading text="Fallback / Without Image" />
      <Avatar alt="Profile Picture" name="Profile Picture" />
    </div>
  );
}
