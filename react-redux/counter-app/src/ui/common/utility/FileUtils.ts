export const printDocument = (
  blob: Blob,
  filename: string,
  contentRef?: React.RefObject<HTMLIFrameElement>,
): void => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename.replace("blob:", ""));
  } else if (contentRef) {
    const iframe: HTMLIFrameElement | null = contentRef.current;

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.print();
    }
  } else {
    window.open(URL.createObjectURL(blob));
  }
};
