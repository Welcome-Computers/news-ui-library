var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CommonAvatar: () => CommonAvatar_default2,
  NewsCard: () => NewsCard_default2,
  SquareLoader: () => SquareLoader_default,
  extractIdFromSlug: () => extractIdFromSlug,
  getFullName: () => getFullName,
  getSFullName: () => getSFullName,
  useBreakpoint: () => useBreakpoint
});
module.exports = __toCommonJS(index_exports);

// src/components/CommonAvatar/CommonAvatar.tsx
var import_antd = require("antd");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var CommonAvatar = ({
  src,
  alt = "avatar",
  size = 50,
  name = "",
  style = {}
}) => {
  const [imageError, setImageError] = (0, import_react.useState)(false);
  const getInitials = (name2) => name2.split(" ").map((n) => n[0]?.toUpperCase()).join("").slice(0, 2);
  return imageError || !src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_antd.Avatar,
    {
      style: {
        backgroundColor: "#87d068",
        fontSize: size / 2.5,
        ...style
      },
      size,
      icon: !name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "lnr lnr-user" }),
      children: name ? getInitials(name) : null
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_antd.Image,
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
var import_antd2 = require("antd");

// src/util/helper.ts
var getFullName = (value) => {
  const fullname = [value?.first_name, value?.second_name, value?.last_name].filter(Boolean).join(" ");
  return fullname;
};
var getSFullName = (value) => {
  const fullname = [value?.first_name, value?.second_name].filter(Boolean).join(" ");
  return fullname;
};
var extractIdFromSlug = (slugAndId) => {
  if (typeof slugAndId !== "string" || !slugAndId.trim()) {
    return null;
  }
  const parts = slugAndId.split("-");
  const lastPart = parts[parts.length - 1];
  const id = Number(lastPart);
  return isNaN(id) ? null : id;
};

// src/components/NewsCard/NewsCard.tsx
var import_antd3 = require("antd");
var import_jsx_runtime2 = require("react/jsx-runtime");
var { Title } = import_antd3.Typography;
var truncateWords = (text, count) => {
  const words = text.split(" ");
  return words.length > count ? words.slice(0, count).join(" ") + "..." : text;
};
var NewsCard = (props) => {
  const { item, type = "default" } = props || {};
  const defaultType = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { height: 250, src: item?.article_image, alt: item?.title, preview: false }),
      className: `jg-news-card__image-wrapper ${type}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
          item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
          item?.title
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__reporter", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            CommonAvatar_default,
            {
              size: 30,
              src: item?.reporter?.profile_pick,
              name: getSFullName(item?.reporter)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { className: "jg-news-card__reporter--name", children: getSFullName(item?.reporter) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "jg-news-card__date", children: [
            "\u2013 ",
            item?.news_date
          ] })
        ] })
      ]
    }
  );
  const renderType1 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `jg-news-card__image-wrapper ${type}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
      item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
      item?.title
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__reporter", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "jg-news-card__date", children: item?.news_date }) })
  ] });
  const renderType2 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { height: 200, src: item?.article_image, alt: item?.title, preview: false, className: "news-cover" }),
      className: `jg-news-card__image-wrapper ${type}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
          item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
          item?.title
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__reporter", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            CommonAvatar_default,
            {
              size: 30,
              src: item?.reporter?.profile_pick,
              name: getSFullName(item?.reporter)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { className: "jg-news-card__reporter--name", children: getSFullName(item?.reporter) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "jg-news-card__date", children: [
            "\u2013 ",
            item?.news_date
          ] })
        ] })
      ] })
    }
  );
  const renderType3 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { height: 100, src: item?.article_image, alt: item?.title, preview: false, className: "news-cover" }),
      className: `jg-news-card__image-wrapper ${type}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__section right-section", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
        item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
        item?.title
      ] }) })
    }
  );
  const renderType4 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `jg-news-card__image-wrapper ${type}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__section left-section", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { width: 100, height: 100, src: item?.article_image, alt: item?.title, preview: false, className: "news-cover" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__section right-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
        item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
        item?.title
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Title, { className: "jg-news-card__title", level: 5, children: item?.articleCategories?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__category", children: [
        item?.articleCategories?.slice(0, 2)?.map((el) => {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "red", children: el?.category?.name }, el?.category?.id);
        }),
        item?.articleCategories.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Tag, { color: "blue", children: [
          "+",
          item.articleCategories.length - 3,
          " more"
        ] })
      ] }) })
    ] })
  ] });
  const renderType5 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { height: 600, src: item?.article_image, alt: item?.title, preview: false }),
      style: {
        backgroundImage: `url(${item?.article_image})`
      },
      className: `jg-news-card__image-wrapper ${type}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__content", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__content--inner", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Title, { className: "jg-news-card__category-box", level: 5, children: item?.articleCategories?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__category", children: [
          item?.articleCategories?.slice(0, 2)?.map((el) => {
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "red", children: el?.category?.name }, el?.category?.id);
          }),
          item?.articleCategories.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Tag, { color: "blue", children: [
            "+",
            item.articleCategories.length - 3,
            " more"
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
          item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
          item?.title
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "jg-news-card__summary", children: truncateWords(item?.summary || "", 6) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__reporter", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            CommonAvatar_default,
            {
              size: 40,
              src: item?.reporter?.profile_pick,
              name: getSFullName(item?.reporter)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { className: "jg-news-card__reporter--name", children: getSFullName(item?.reporter) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "jg-news-card__date", children: [
            "\u2013 ",
            item?.news_date
          ] })
        ] })
      ] }) })
    }
  );
  const renderType6 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          className: "jg-news-card__image-box",
          style: { backgroundImage: `url(${item?.article_image})` }
        }
      ),
      className: `jg-news-card__image-wrapper ${type}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__content", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__content--inner", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Title, { className: "jg-news-card__category-box", level: 5, children: item?.articleCategories?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__category", children: [
          item?.articleCategories?.slice(0, 2)?.map((el) => {
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "red", children: el?.category?.name }, el?.category?.id);
          }),
          item?.articleCategories.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Tag, { color: "blue", children: [
            "+",
            item.articleCategories.length - 3,
            " more"
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
          item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
          item?.title
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__reporter", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            CommonAvatar_default,
            {
              size: 40,
              src: item?.reporter?.profile_pick,
              name: getSFullName(item?.reporter)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { className: "jg-news-card__reporter--name", children: getSFullName(item?.reporter) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "jg-news-card__date", children: [
            "\u2013 ",
            item?.news_date
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "jg-news-card__summary", children: truncateWords(item?.summary || "", 6) })
      ] }) })
    }
  );
  const renderType7 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `jg-news-card__image-wrapper ${type}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
      item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
      item?.title
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__reporter", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "jg-news-card__date", children: item?.news_date }) })
  ] }) });
  const renderType8 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `jg-news-card__image-wrapper ${type}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__content", children: [
    item?.articleCategories?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Title, { className: "jg-news-card__category", level: 5, children: item?.articleCategories?.map((el, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: el?.category?.name }, index);
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "jg-news-card__title", children: item?.title }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "jg-news-card__summary", children: truncateWords(item?.summary || "", 6) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__reporter", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "jg-news-card__date", children: item?.news_date }) })
  ] }) });
  const renderType9 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { src: item?.article_image, alt: item?.title, preview: false }),
      className: `jg-news-card__image-wrapper ${type}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__content", children: [
        item?.articleCategories?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Title, { className: "jg-news-card__category", level: 5, children: item?.articleCategories?.map((el, index) => {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: el?.category?.name }, index);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
          item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
          item?.title
        ] })
      ] })
    }
  );
  const renderType10 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { height: 200, src: item?.article_image, alt: item?.title, preview: false }),
      className: `jg-news-card__image-wrapper ${type}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__content", children: [
        item?.articleCategories?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Title, { className: "jg-news-card__category", level: 5, children: item?.articleCategories?.map((el, index) => {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: el?.category?.name }, index);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
          item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
          item?.title
        ] })
      ] })
    }
  );
  const renderType11 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `jg-news-card__image-wrapper ${type}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__section right-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
      item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
      item?.title
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__reporter", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "jg-news-card__date", children: [
      "\u2013 ",
      item?.news_date
    ] }) })
  ] }) });
  const renderType12 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card-cover", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_antd2.Card,
      {
        cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { height: 550, src: item?.article_image, alt: item?.title, preview: false }),
        style: { backgroundImage: `url(${item?.article_image})` },
        className: `jg-news-card__image-wrapper ${type}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
            item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
            item?.title
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__reporter", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "jg-news-card__date", children: item?.news_date }) })
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__main--category", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#000", children: item?.articleCategories?.[0].category?.name }) })
  ] });
  const renderType13 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { height: 300, src: item?.article_image, alt: item?.title, preview: false }),
      className: `jg-news-card__image-wrapper ${type}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
          item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
          item?.title
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__reporter", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            CommonAvatar_default,
            {
              size: 30,
              src: item?.reporter?.profile_pick,
              name: getSFullName(item?.reporter)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { className: "jg-news-card__reporter--name", children: getSFullName(item?.reporter) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "jg-news-card__date", children: [
            "\u2013 ",
            item?.news_date
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "jg-news-card__summary", children: truncateWords(item?.summary || "", 6) })
      ] })
    }
  );
  const renderType14 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `jg-news-card__image-wrapper ${type}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "jg-news-card__title", children: item?.title }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "jg-news-card__reporter", children: [
      item?.articleCategories?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__category", children: item?.articleCategories?.map((el) => {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "red", children: el?.category?.name }, el?.category?.id);
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "jg-news-card__date", children: item?.news_date })
    ] })
  ] }) });
  const renderType15 = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_antd2.Card,
    {
      cover: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Image, { height: 200, src: item?.article_image, alt: item?.title, preview: false }),
      className: `jg-news-card__image-wrapper ${type}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "jg-news-card__content", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: "jg-news-card__title", children: [
        item?.is_exclusive ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tag, { color: "#cf1322", children: "Exclusive" }) : null,
        item?.title
      ] }) })
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `jg-news-card outer-${type} ${type}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: `/news/${item?.slug}-${item?.id}`, children: type === "type-1" ? renderType1() : type === "type-2" ? renderType2() : type === "type-3" ? renderType3() : type === "type-4" ? renderType4() : type === "type-5" ? renderType5() : type === "type-6" ? renderType6() : type === "type-7" ? renderType7() : type === "type-8" ? renderType8() : type === "type-9" ? renderType9() : type === "type-10" ? renderType10() : type === "type-11" ? renderType11() : type === "type-12" ? renderType12() : type === "type-13" ? renderType13() : type === "type-14" ? renderType14() : type === "type-15" ? renderType15() : defaultType() }) });
};
var NewsCard_default = NewsCard;
{
}

// src/components/NewsCard/index.ts
var NewsCard_default2 = NewsCard_default;

// src/components/CommonAvatar/index.ts
var CommonAvatar_default2 = CommonAvatar_default;

// src/components/SquareLoader/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var SquareLoader = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "loader-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "loader-grid", children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `square square-${i + 1}` }, i)) }) });
};
var SquareLoader_default = SquareLoader;

// src/hooks/useBreakpoint.tsx
var import_react2 = require("react");
var breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
function useBreakpoint() {
  const [width, setWidth] = (0, import_react2.useState)(void 0);
  (0, import_react2.useEffect)(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (width === void 0) {
    return { width: 0, breakpoint: "xs", gutterpoint: 10 };
  }
  const breakpoint = (() => {
    if (width < breakpoints.sm) return "xs";
    if (width < breakpoints.md) return "sm";
    if (width < breakpoints.lg) return "md";
    if (width < breakpoints.xl) return "lg";
    if (width < breakpoints.xxl) return "xl";
    return "xxl";
  })();
  const gutterpoint = (() => {
    if (width < breakpoints.sm) return 10;
    if (width < breakpoints.md) return 15;
    if (width < breakpoints.lg) return 20;
    if (width < breakpoints.xl) return 25;
    if (width < breakpoints.xxl) return 30;
    return 30;
  })();
  return { width, breakpoint, gutterpoint };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CommonAvatar,
  NewsCard,
  SquareLoader,
  extractIdFromSlug,
  getFullName,
  getSFullName,
  useBreakpoint
});
