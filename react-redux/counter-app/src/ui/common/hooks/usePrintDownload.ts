import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface UsePrintDownloadProps {
  fileName?: string;
}

export const usePrintDownload = ({ fileName = "document" }: UsePrintDownloadProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: fileName,

    print: async (printIframe) => {
      if (printIframe.contentWindow) {
        printIframe.contentWindow.focus();
        printIframe.contentWindow.print();
      }
    },
  });

  return {
    componentRef,
    handlePrint,
  };
};
