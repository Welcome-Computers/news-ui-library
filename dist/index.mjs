// src/components/CommonAvatar/CommonAvatar.tsx
import { Avatar, Image } from "antd";
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
var CommonAvatar = ({
  src,
  alt = "avatar",
  size = 50,
  name = "",
  style = {}
}) => {
  const [imageError, setImageError] = useState(false);
  const getInitials = (name2) => name2.split(" ").map((n) => n[0]?.toUpperCase()).join("").slice(0, 2);
  return imageError || !src ? /* @__PURE__ */ jsx(
    Avatar,
    {
      style: {
        backgroundColor: "#87d068",
        fontSize: size / 2.5,
        ...style
      },
      size,
      icon: !name && /* @__PURE__ */ jsx("span", { className: "lnr lnr-user" }),
      children: name ? getInitials(name) : null
    }
  ) : /* @__PURE__ */ jsx(
    Image,
    {
      preview: false,
      src,
      width: size,
      height: size,
      alt,
      style: { borderRadius: 5, ...style },
      onError: () => setImageError(true)
    }
  );
};
var CommonAvatar_default = CommonAvatar;

// src/components/NewsCard/NewsCard.tsx
import { Card, Image as Image2, Tag, Typography } from "antd";
import Link from "antd/es/typography/Link";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var { Title, Text } = Typography;
{
}
export {
  CommonAvatar_default as CommonAvatar
};
