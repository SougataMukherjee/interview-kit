import { useRef, useCallback } from 'react';
import { useReactToPrint } from 'react-to-print';

interface PrintDownloadOptions {
  fileName: string;
  onDownload?: (fileName: string, bodyContent: string, footerContent: string) => void;
  onPrint?: (fileName: string, bodyContent: string, footerContent: string) => void;
  onGenerateContent?: (document: Document) => {
    bodyContent: string;
    footerContent: string;
  };
}

interface UsePrintDownloadReturn {
  componentRef: React.RefObject<HTMLDivElement>;
  handleDownload: () => void;
  handlePrint: () => void;
}

export const usePrintDownload = ({
  fileName,
  onDownload,
  onPrint,
  onGenerateContent,
}: PrintDownloadOptions): UsePrintDownloadReturn => {
  const componentRef = useRef<HTMLDivElement>(null);

  const downloadCallBack = useReactToPrint({
    content: () => componentRef.current as React.ReactInstance,
    documentTitle: `${fileName}.pdf`,
    copyStyles: true,
    print: (printIframe: HTMLIFrameElement) => {
      const document = printIframe.contentDocument;
      if (document) {
        const { bodyContent, footerContent } = onGenerateContent
          ? onGenerateContent(document)
          : { bodyContent: '', footerContent: '' };
        onDownload?.(fileName, bodyContent, footerContent);
      }
      return new Promise((resolve) => resolve(''));
    },
  });

  const printCallBack = useReactToPrint({
    content: () => componentRef.current as React.ReactInstance,
    documentTitle: `${fileName}.pdf`,
    copyStyles: true,
    print: (printIframe: HTMLIFrameElement) => {
      const document = printIframe.contentDocument;
      if (document) {
        const content = onGenerateContent
          ? onGenerateContent(document)
          : { bodyContent: '', footerContent: '' };
        onPrint?.(fileName, content.bodyContent, content.footerContent);
      }
      return new Promise((resolve) => resolve(''));
    },
  });

  const handleDownload = useCallback(() => {
    downloadCallBack();
  }, [downloadCallBack]);

  const handlePrint = useCallback(() => {
    printCallBack();
  }, [printCallBack]);

  return { componentRef, handleDownload, handlePrint };
};