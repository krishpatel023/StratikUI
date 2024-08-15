import Dummy1 from "@registry/assets/Images/Image_1.jpg";
import Dummy2 from "@registry/assets/Images/Image_2.jpg";
import Dummy3 from "@registry/assets/Images/Image_3.jpg";
import Dummy4 from "@registry/assets/Images/Image_4.jpg";
import Dummy5 from "@registry/assets/Images/Image_5.jpg";
import Dummy6 from "@registry/assets/Images/Image_6.jpg";
import Dummy7 from "@registry/assets/Images/Image_7.jpg";
import ArrowHeading from "@registry/ui/ArrowHeading";
import { AvatarStack } from "@registry/packages/primitives/avatars/03/default-ts/Avatar";

export default function StackedAvatarImplementation() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <ArrowHeading text="With Extension" />
      <AvatarStack
        avatars={[
          { src: Dummy6, name: "Profile Picture" },
          { src: Dummy2, name: "Profile Picture" },
          { src: Dummy3, name: "Profile Picture" },
          { src: Dummy4, name: "Profile Picture" },
          { src: Dummy5, name: "Profile Picture" },
          { src: Dummy1, name: "Profile Picture" },
          { src: Dummy7, name: "Profile Picture" },
        ]}
        withExtension
      />

      <ArrowHeading text="Without Extension" />
      <AvatarStack
        avatars={[
          { src: Dummy2, name: "Profile Picture" },
          { src: Dummy3, name: "Profile Picture" },
          { src: Dummy4, name: "Profile Picture" },
          { src: Dummy7, name: "Profile Picture" },
          { src: Dummy5, name: "Profile Picture" },
          { src: Dummy6, name: "Profile Picture" },
          { src: Dummy1, name: "Profile Picture" },
        ]}
      />
    </div>
  );
}
