export const printDocument = (
  blob: Blob,
  filename: string,
  contentRef?: React.RefObject<HTMLIFrameElement>
): void => {
  if ((window.navigator as any).msSaveOrOpenBlob) {
    (window.navigator as any).msSaveOrOpenBlob(
      blob,
      filename.replace('blob:', '')
    );
  } else if (contentRef) {
    const iframe: HTMLIFrameElement | null = contentRef.current;

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.print();
    }
  } else {
    window.open(URL.createObjectURL(blob));
  }
};