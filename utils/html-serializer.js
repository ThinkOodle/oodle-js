import prismicDOM from "prismic-dom";
import linkResolver from "./link-resolver";
var Elements = prismicDOM.RichText.Elements;

export default function(type, element, content, children) {
  var result;
  switch (type) {
    case Elements.heading1:
      return `<h1>${children.join("")}</h1>`;
    case Elements.heading2:
      return `<h2>${children.join("")}</h2>`;
    case Elements.heading3:
      return `<h3>${children.join("")}</h3>`;
    case Elements.heading4:
      return `<h4>${children.join("")}</h4>`;
    case Elements.heading5:
      return `<h5>${children.join("")}</h5>`;
    case Elements.heading6:
      return `<h6>${children.join("")}</h6>`;
    case Elements.paragraph:
      if (element.text.length == 0) {
        return `<br/>`;
      } else {
        return `<p>${children.join("")}</p>`;
      }

    case Elements.preformatted:
      return `<pre>${children.join("")}</pre>`;
    case Elements.strong:
      return `<strong>${children.join("")}</strong>`;
    case Elements.em:
      return `<em>${children.join("")}</em>`;
    case Elements.listItem:
      return `<li>${children.join("")}</li>`;
    case Elements.oListItem:
      return `<li>${children.join("")}</li>`;
    case Elements.list:
      return `<ul>${children.join("")}</ul>`;
    case Elements.oList:
      return `<ol>${children.join("")}</ol>`;
    case Elements.image:
      result = `<img src="${element.url}" alt="${element.alt ||
        ""}" copyright="${element.copyright || ""}">`;

      if (element.linkTo) {
        const url = prismicDOM.Link.url(element.linkTo, linkResolver);

        if (element.linkTo.link_type === "Document") {
          result = `<router-link to="${url}">${result}</router-link>`;
        } else {
          const target = element.linkTo.target
            ? `target="${element.linkTo.target}" rel="noopener"`
            : "";
          result = `<a href="${url}" ${target}>${result}</a>`;
        }
      }
      const wrapperClassList = [element.label || "", "block-img"];
      result = `<p class="${wrapperClassList.join(" ")}">${result}</p>`;
      return result;
    case Elements.embed:
      return `
        <div data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
        >
          ${element.oembed.html}
        </div>
      `;
    case Elements.hyperlink:
      const url = prismicDOM.Link.url(element.data, linkResolver);
      if (element.data.link_type === "Document") {
        result = `<router-link to="${url}">${content}</router-link>`;
      } else {
        const target = element.data.target
          ? `target="'${element.data.target}'" rel="noopener"`
          : "";
        result = `<a href="${url}" ${target}>${content}</a>`;
      }
      return result;
    case Elements.label:
      var label = element.data.label ? ` class="${element.data.label}"` : "";
      return `<span ${label}>${children.join("")}</span>`;
    case Elements.span:
      return content ? content.replace(/\n/g, "<br />") : "";
    default:
      return null;
  }
}
