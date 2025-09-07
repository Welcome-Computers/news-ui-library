import { Avatar, Image } from "antd";
import React, { useState } from "react";

interface CommonAvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    name?: string; // for fallback initials
    style?: React.CSSProperties;
}

const CommonAvatar: React.FC<CommonAvatarProps> = ({
    src,
    alt = "avatar",
    size = 50,
    name = "",
    style = {},
}) => {
    const [imageError, setImageError] = useState(false);

    // Get initials if name is provided
    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((n) => n[0]?.toUpperCase())
            .join("")
            .slice(0, 2);

    return imageError || !src ? (
        <Avatar
            style={{
                backgroundColor: "#87d068",
                fontSize: size / 2.5,
                ...style,
            }}
            size={size}
            icon={!name && <span className="lnr lnr-user"></span>}
        >
            {name ? getInitials(name) : null}
        </Avatar>
    ) : (
        <Image
            preview={false}
            src={src}
            width={size}
            height={size}
            alt={alt}
            style={{ borderRadius: 5, ...style }}
            onError={() => setImageError(true)}
        />
    );
};

export default CommonAvatar;
