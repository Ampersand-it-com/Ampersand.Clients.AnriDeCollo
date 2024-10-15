export function smoothScrollTo(selector, offset = 50) {
  const root = document.querySelector("#root");
  const element = document.querySelector(selector);

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + root.scrollTop;
    const offsetPosition = elementPosition - offset;

    document.querySelector("#root").scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// export function download(url, filename) {
//   let element = document.createElement("a");
//   element.setAttribute("href", url);
//   filename && element.setAttribute("download", filename);
//   document.body.appendChild(element);
//   element.click();

//   document.body.removeChild(element);
// }

export function download(url, filename) {
  fetch(url)
    .then((response) => {
      const contentType = response.headers.get("Content-Type");
      return response.blob().then((blob) => ({ blob, contentType }));
    })
    .then(({ blob, contentType }) => {
      let extension = "";

      if (contentType) {
        // Сопоставляем Content-Type с возможными расширениями
        switch (contentType) {
          case "image/jpeg":
            extension = "jpg";
            break;
          case "image/png":
            extension = "png";
            break;
          case "application/pdf":
            extension = "pdf";
            break;
          case "text/plain":
            extension = "txt";
            break;
          default:
            extension = "";
        }
      }

      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${filename}.${extension}`);

      // Append to html link element page
      document.body.appendChild(link);

      // Start download
      link.click();

      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
}
